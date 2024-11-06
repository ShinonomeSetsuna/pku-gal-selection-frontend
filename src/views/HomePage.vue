<template>
    <n-flex vertical id="home">
        <n-flex vertical id="notification" justify="center">
            <NH1>PKU_GAL同好会2024年大选</NH1>
            <NP>请在下方选择参赛的组别和赛事，为确保投票安全请在下方输入您的邮箱，输入邮箱后可以投票</NP>
            <NP>其实没有做完，输入了也不能投票，但是可以点按钮</NP>
            <n-input placeholder="example@example.com" :value="userStore.getUserEmail" style="text-align: start;"
                :status="userStore.getUserEmail === '' ? undefined : (userStore.getStatus() ? 'success' : 'error')"
                @update:value="(value) => { userStore.setUserEmail(value); console.log(value) }"
                :theme-overrides="inputThemeOverride" />
        </n-flex>

        <n-flex vertical id="category">
            <NH2>请选择组别</NH2>
            <n-radio-group v-model:value="userStore.userSelect" :theme-overrides="radioGroupThemeOverride">
                <n-radio-button v-for="category in categories" :key="category.value" :value="category.value"
                    :label="category.label">
                </n-radio-button>
            </n-radio-group>
        </n-flex>
        <n-flex vertical id="competition">
            <n-button v-for="competition in competetions"
                :disabled="!userStore.getStatus() || !Boolean(userStore.getUserSelect)" :color="competition.color"
                @click="() => { handleButton(competition.label) }">
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
import { NButton, NFlex, NH1, NH2, NP, NRadioGroup, NRadioButton, NInput } from 'naive-ui';
import { RadioGroupProps, InputProps } from 'naive-ui';
import { useMessage, useDialog } from 'naive-ui';
import { useUserStore } from '../stores/userStore';

const message = useMessage();
const dialog = useDialog();

const handleButton = (label: string) => {
    dialog.info({
        title: '跳转提示',
        content: `要参与${label}的投票吗？`,
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
            message.success('即将跳转……好吧其实还没有做。');
        },
        onNegativeClick: () => {
            message.info('取消投票。')
        }
    })
}

const userStore = useUserStore();

const inputThemeOverride: NonNullable<InputProps["themeOverrides"]> = {
    borderFocus: "#66ccff",
    boxShadowFocus: "#66ccff",
    borderHover: "#66ccff",
    caretColor: "#66ccff"
}

const radioGroupThemeOverride: NonNullable<RadioGroupProps['themeOverrides']> = {
    buttonTextColorHover: "#66ccff",
    buttonTextColorActive: "#66ccff",
    buttonBorderColorActive: "#66ccff"
}

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