<template>
    <n-flex vertical id="home">
        <n-flex vertical id="notification" justify="center">
            <NH1>PKU_GAL同好会2024年大选</NH1>
            <NP>请在下方选择参赛的组别和赛事，为确保投票安全请在下方输入您的邮箱</NP>
            <n-input placeholder="example@example.com" :value="userStore.getUserEmail" style="text-align: start;"
                :status="userStore.getUserEmail === '' ? undefined : (userStore.getStatus() ? 'success' : 'error')"
                @update:value="(value) => { userStore.setUserEmail(value); console.log(value) }" />
        </n-flex>

        <n-flex vertical id="category">
            <NH2>请选择组别</NH2>
            <n-radio-group v-model:value="userStore.userSelect">
                <n-radio-button v-for="category in categories" :key="category.value" :value="category.value"
                    :label="category.label">
                </n-radio-button>
            </n-radio-group>
        </n-flex>
        <n-flex vertical id="competition">
            <n-button v-for="competition in competetions" :disabled="!userStore.getStatus()" :color="competition.color">
                {{ competition.label }} </n-button>
        </n-flex>
    </n-flex>
</template>

<style scoped>
#home {
    text-align: center;
    max-width: 640px;
}

#notification {
    text-align: center;
    background-color: aliceblue;
    border-radius: 1em;
    padding: 1em;
}

#category {
    text-align: center;
    background-color: aliceblue;
    border-radius: 1em;
    padding: 1em;
}

#competition {
    text-align: center;
    background-color: aliceblue;
    border-radius: 1em;
    padding: 1em;
}
</style>


<script setup lang="ts">
import { NButton, NFlex, NH1, NH2, NP, NRadioGroup, NRadioButton, NRadio, NInput } from 'naive-ui';
import { useUserStore } from '../stores/userStore';
import Rules from '../components/Rules.vue';

const userStore = useUserStore();

const categories = [
    {
        "value": "character",
        "label": "角色组"
    }, {
        "value": "vn",
        "label": "作品组"
    }, {
        "value": "staff",
        "label": "剧本家组"
    }
]

const competetions = [
    {
        "label": "海选赛",
        "color": "#ffbcbd"
    }, {
        "label": "小组赛",
        "color": "#ffdfd7"
    }, {
        "label": "???",
        "color": "#757cab"
    },
]


</script>