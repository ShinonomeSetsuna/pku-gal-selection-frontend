<template>
    <div id="home">
        <n-flex vertical id="qualify" justify="center">
            <Rules competetion-format="qualifying" id="rules" class="background" />
            <n-flex vertical justify="center" id="addition" class="background">
                <n-p style="font-size: 24px; margin: 15px 15px 7.5px 15px;">请输入VNDB代码，后续开放网页查询功能</n-p>
                <n-flex justify="space-between" style="margin: 7.5px 15px 15px 15px;">
                    <n-input style="max-width: 450px; text-align: start" placeholder="e.g.:c94398, 藤川みあ@Loopers"
                        :value="voteStore.getAddVote"
                        @update:value="(value) => { voteStore.setAddVote(value) }"></n-input>
                    <n-button @click="buttonHandle">确定</n-button>
                </n-flex>
            </n-flex>
            <n-flex justify="space-between" id="cards" class="background">
                <single-card v-for=" data in dataList" :types="data.types" :-v-n-d-b-id="data.vndbID"
                    :count="data.count" style="margin: 24px;"></single-card>
            </n-flex>
        </n-flex>
    </div>
</template>

<style scoped>
#home {
    display: flex;
    justify-content: center;
}

#qualify {
    max-width: 600px;
    height: fix-content;
}

.background {
    border-radius: 1em;
    background-color: aliceblue;
}

#rules {
    padding: 24px;
}

#addition {
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
}
</style>

<script setup lang="ts">
import { NFlex, NInput, NButton, NP, NMessageProvider } from 'naive-ui';
import { useDialog, useMessage } from 'naive-ui';
import SingleCard from '../components/SingleCard.vue';
import Rules from '../components/Rules.vue';
import { useVoteStore } from '../stores/voteStore';
import { h, ref } from 'vue';
import ShowCard from '../components/showCard.vue';


interface Data {
    types: "character" | "vn" | "staff",
    vndbID: String,
    count: Number
}

const dataList = ref<Data[]>([
    { types: "character", vndbID: "c128207", count: 44.5 },
    { types: "character", vndbID: "c87815", count: 44.5 },
    { types: "character", vndbID: "c128205", count: 44.5 },
    { types: "character", vndbID: "c7921", count: 44.5 },
    { types: "vn", vndbID: "v38430", count: 44.5 },
    { types: "character", vndbID: "c111506", count: 44.5 },
    { types: "vn", vndbID: "v36375", count: 44.5 },
])



const voteStore = useVoteStore();
const dialog = useDialog();
const message = useMessage();

const buttonHandle = () => {
    dialog.info(
        {
            title: "投票提示",
            content: () => h(NMessageProvider, {}, {
                default: () => h(ShowCard, { VNDBId: voteStore.getAddVote })
            }),
            positiveText: "确定",
            negativeText: "取消",
            onPositiveClick: () => {
                dataList.value.push({ types: voteStore.getAddVoteType(), vndbID: voteStore.getAddVote, count: 1 } as Data)
                message.success("投票成功，请到页末查看。")
            },
            onNegativeClick: () => {

            }
        }
    )
}


</script>