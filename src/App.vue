<template>
  <n-dialog-provider>
    <n-message-provider>
      <n-flex vertical>
        <n-flex style="background-color: aliceblue; border-radius: 5em;" vertical justify="center">
          <NH1 style="text-align: center">PKU-GAL同好会2024大选</NH1>
          <NP style="text-align: center;">这是大选现场<br/>每人共计三票，同一角色不可重复投票<br/>骗你的这只是个测试网站根本没有后端</NP>
        </n-flex>
        <n-flex justify="center">
          <single-card v-for="data in dataList" :types="data.types" :vndb_id="data.vndbID" :count="data.count" />
        </n-flex>
      </n-flex>
    </n-message-provider>
  </n-dialog-provider>
</template>

<style scoped>
</style>

<script setup lang="ts">
import SingleCard from './components/SingleCard.vue';
import { NDialogProvider, NMessageProvider, NFlex, NH1, NP } from 'naive-ui'

interface Data {
  types: "character" | "vn" | "staff",
  vndbID: String,
  count: Number
}

const dataList: Data[] = [
  { types: "character", vndbID: "c128207", count: 44.5 },
  { types: "character", vndbID: "c87815", count: 44.5 },
  { types: "character", vndbID: "c128205", count: 44.5 },
  { types: "character", vndbID: "c7921", count: 44.5 },
  { types: "vn", vndbID: "v38430", count: 44.5 },
  { types: "character", vndbID: "c111506", count: 44.5 },
  { types: "vn", vndbID: "v36375", count: 44.5 },
]

</script>
