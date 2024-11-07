<template>
    <div id="container">
        <n-flex vertical id="home">
            <n-flex vertical id="notification" justify="center">
                <NH1>PKU_GAL同好会2024年大选</NH1>
                <NP>请在下方选择参赛的组别和赛事，为确保投票安全请在下方输入您的邮箱，输入邮箱后可以投票</NP>
                <NP>其实没有做完，输入了也不能投票，但是可以点按钮（方便测试暂时不需要邮箱）</NP>
                <!--这个是userStore的逻辑，记得去那边改回来-->
                <n-input placeholder="example@example.com" :value="userStore.getUserEmail" style="text-align: start;"
                    :status="userStore.getUserEmail === '' ? undefined : (userStore.getStatus() ? 'success' : 'error')"
                    @update:value="(value) => { userStore.setUserEmail(value); console.log(value) }"
                    :theme-overrides="inputThemeOverride" />
            </n-flex>

            <n-flex vertical id="category">
                <NH2>请选择组别</NH2>
                <n-flex id="button-group" justify="space-between">
                    <n-button class="buttons" @click="() => { userStore.setUserSelect('character') }"
                        :color="userStore.getUserSelect === 'character' ? '#66ccff' : ''">角色组</n-button>
                    <n-button class="buttons" @click="() => { userStore.setUserSelect('vn') }"
                        :color="userStore.getUserSelect === 'vn' ? '#66ccff' : ''">作品组</n-button>
                    <n-button class="buttons" @click="() => { userStore.setUserSelect('staff') }"
                        :color="userStore.getUserSelect === 'staff' ? '#66ccff' : ''">剧本家组</n-button>
                </n-flex>
            </n-flex>
            <n-flex vertical id="competition">
                <n-button v-for="competition in competetions"
                    :disabled="!userStore.getStatus() || !Boolean(userStore.getUserSelect)" :color="competition.color"
                    @click="() => { handleButton(competition.label) }">
                    {{ competition.label }} </n-button>
            </n-flex>
        </n-flex>
    </div>
</template>

<style scoped>
#container {
    display: flex;
    justify-content: center;
}


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

#button-group {
    padding: 0 3em 0 3em;
}

.buttons {
    min-width: 80px;
}

#competition {
    text-align: center;
    background-color: aliceblue;
    border-radius: 1em;
    padding: 1em;
}
</style>


<script setup lang="ts">
import { NButton, NFlex, NH1, NH2, NP, NInput } from 'naive-ui';
import { InputProps } from 'naive-ui';
import { useMessage, useDialog } from 'naive-ui';
import { useUserStore } from '../stores/userStore';
import { RouterLink } from 'vue-router';
import { h } from 'vue';

const message = useMessage();
const dialog = useDialog();

const handleButton = (label: string) => {
    dialog.info({
        title: '跳转提示',
        content: `要参与${label}的投票吗？`,
        positiveText: '确定',
        negativeText: '取消',
        action: () => h(NButton, {
            "onclick": () => {
                dialog.destroyAll();
                if (label === "海选赛") {
                }
                else {
                    message.success('即将跳转……好吧其实还没有做。');
                }
            }
        }, label === "海选赛" ? h(RouterLink, { to: { name: "qualify", query: { category: label } } }, () => { return "确定" }) : { default: "确定" })
    })
}

const userStore = useUserStore();

const inputThemeOverride: NonNullable<InputProps["themeOverrides"]> = {
    borderFocus: "#66ccff",
    boxShadowFocus: "#66ccff",
    borderHover: "#66ccff",
    caretColor: "#66ccff"
}

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