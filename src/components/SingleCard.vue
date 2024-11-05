<template>
    <n-card :title="cardTitle" v-if="loadFinished" style="width: 280px">
        <n-image :src="cardImage" height="320" width="240" object-fit="cover"></n-image>
        <template #footer>
            <n-flex vertical>
                <div>当前票数：{{ count }}</div>
                <n-button @click="voteHandle" :disabled="voted">{{voted ? "已投票":"投票"}}</n-button>
            </n-flex>
    </template>
    </n-card>
</template>

<script setup lang="ts">
import { NButton, NCard, NImage, NFlex, } from 'naive-ui';
import { useDialog, useMessage } from 'naive-ui';
import { ref, onMounted } from 'vue';


const props = defineProps<{ types: "vn" | "character" | "staff", vndb_id: String, count: Number }>()
const dialog = useDialog();
const message = useMessage();

const cardTitle = ref<string>();
const cardImage = ref<string>();
const voted = ref<boolean>(false);
const loadFinished = ref<boolean>(false);


const fetchData = async (types: "vn" | "producer" | "character" | "staff", vndb_id: String) => {
    try {
        const fieldsByTypes = {
            "character":"name, original, image.url",
            "vn":"title, image.url",
            "staff":"",
            "producer":""
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

onMounted(() => {
    fetchData(props.types, props.vndb_id)
})

</script>