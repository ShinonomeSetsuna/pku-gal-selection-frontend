<template>
    <n-flex vertical id="rule">
        <n-h1>PKU_GAL同好会2024年大选</n-h1>
        <n-p>目前还在测试阶段，所以并没有分组，也没有后端，只是随便测试一下</n-p>
        <n-p>{{ rules.get(props.competetionFormat) }}</n-p>
    </n-flex>
</template>

<style scoped>
#rule {
    background-color: aliceblue;
    text-align: center;
}
</style>

<script setup lang="ts">
import { CompetitionFormat } from '../types';
import { NFlex, NH1, NP } from 'naive-ui';

const rules: Map<CompetitionFormat, String> = new Map([
    ["qualifying", "提名阶段：每个人可以投任意票数，但每个选手仅限一票，可以在最上方添加未投票的角色，请输入VNDB所对应的代码"],
    ["group", "小组赛规则：每个小组仅可以选择一位进行投票，可以弃权，所有选择完成后请点击页面最后的投票界面进行投票。"]
])

const props = defineProps<{ competetionFormat: CompetitionFormat }>()

</script>