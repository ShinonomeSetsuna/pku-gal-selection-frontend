<template>
    <div style="display: flex; justify-content: center;">
        <n-card v-if="loadFinished" style="width: 240px" embedded>
            <template #header>
                <n-skeleton v-if="!cardTitle"></n-skeleton>
                <template v-else>{{ cardTitle }}</template>
            </template>
            <n-flex justify="center">
                <n-spin v-if="!imageLoaded"></n-spin>
                <n-image v-show="imageLoaded" :src="cardImage" height="200" width="200" object-fit="cover"
                    :on-load="imageHandle" />
            </n-flex>
            <template #footer>
                <n-flex>
                    <p>确定要为 <b>{{ cardTitle }}</b> 投票吗？</p>
                </n-flex>
            </template>
        </n-card>
    </div>
</template>

<!--对SingleCard.vue的魔改，先对付用一下-->
<script setup lang="ts">
import { NCard, NImage, NFlex, NSkeleton, NSpin } from 'naive-ui';
import { useMessage } from 'naive-ui';
import { ref, onMounted } from 'vue';

import { EntryCategory } from '../types';
import { useVoteStore } from '../stores/voteStore';


const voteStore = useVoteStore();

const props = defineProps<{ VNDBId: String }>()
const message = useMessage();

const cardTitle = ref<string>();
const cardImage = ref<string>();
const loadFinished = ref<boolean>(false);
const imageLoaded = ref<boolean>(false);


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

const imageHandle = () => {
    imageLoaded.value = true;
}

onMounted(() => {
    fetchData(voteStore.getAddVoteType(), props.VNDBId)
})

</script>