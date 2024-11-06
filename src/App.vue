<template>
  <n-dialog-provider>
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-dialog-provider>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
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
