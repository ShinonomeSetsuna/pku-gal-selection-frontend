<template>
    <n-card v-if="loadFinished" embedded>
        <template #header>
            <n-skeleton v-if="!cardTitle"></n-skeleton>
            <template v-else>{{ cardTitle }}</template>
        </template>
        <n-flex justify="center" style="overflow: hidden;">
            <n-spin v-if="!imageLoaded"></n-spin>
            <n-image v-show="imageLoaded" :src="cardImage" :height="Math.min(0.40 * width, 240)"
                :width="Math.max(0.30 * width, 240)" object-fit="cover" :on-load="imageHandle" />
        </n-flex>
        <template #footer>
            <n-flex vertical>
                <div>当前票数：{{ count }}</div>
                <n-button @click="voteHandle" :disabled="voted" color="#66ccff">{{ voted ? "已投票" : "投票" }}</n-button>
            </n-flex>
        </template>
    </n-card>
</template>

<style scoped>
.n-image {
    justify-content: center;
}
</style>

<script setup lang="ts">
import { NButton, NCard, NImage, NFlex, NSkeleton, NSpin } from 'naive-ui';
import { useDialog, useMessage } from 'naive-ui';
import { ref, onMounted } from 'vue';

import { EntryCategory } from '../types';


const props = defineProps<{ types: EntryCategory, VNDBId: String, count: Number }>()
const dialog = useDialog();
const message = useMessage();

const cardTitle = ref<string>();
const cardImage = ref<string>();
const voted = ref<boolean>(false);
const loadFinished = ref<boolean>(false);
const imageLoaded = ref<boolean>(false);

const width = window.innerWidth;


const fetchData = async (types: EntryCategory, vndb_id: String) => {
    try {
        const fieldsByTypes = {
            "character": "name, original, image.url",
            "vn": "title, image.url",
            "staff": "",
            "producer": ""
        }
        const response = await fetch(`https://api.vndb.org/kana/${types}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        filters: ["id", "=", vndb_id],
                        fields: fieldsByTypes[types],
                    }
                )
            })



        if (!response.ok) {
            message.error("加载VNDB数据错误，请刷新，如果多次出现请联系管理员");
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        else {
            const r = await response.json()
            switch (types) {
                case "character":
                    cardTitle.value = `${r.results[0].original}`;
                    cardImage.value = r.results[0].image.url;
                    break;
                case "vn":
                    cardTitle.value = `${r.results[0].title}`
                    cardImage.value = r.results[0].image.url;
                    break;
            }
            loadFinished.value = true;
        }

    } catch (error) {
        console.error("Fetch POST error:", error);
        throw error;
    }
}

const voteHandle = () => {
    dialog.warning({
        title: '警告',
        content: `你确定要为 ${cardTitle.value} 投票吗？该操作不可撤回`,
        positiveText: '确定',
        negativeText: '不确定',
        onPositiveClick: () => {
            message.success('投票成功！');
            voted.value = true;
        },
        onNegativeClick: () => {
            message.error('投票取消');
        }
    })
}

const imageHandle = () => {
    imageLoaded.value = true;
}

onMounted(() => {
    fetchData(props.types, props.VNDBId)
})

</script>