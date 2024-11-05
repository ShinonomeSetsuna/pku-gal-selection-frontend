<template>
  <n-dialog-provider>
    <n-message-provider>
      <n-flex justify="center">
        <single-card v-for="data in dataList" :types="data.types" :vndb_id="data.vndbID" :count="44.5" />
      </n-flex>
    </n-message-provider>
  </n-dialog-provider>
</template>

<style scoped>
</style>

<script setup lang="ts">
import SingleCard from './components/SingleCard.vue';
import { NDialogProvider, NMessageProvider, NFlex } from 'naive-ui'

interface Data {
  types: "character" | "vn" | "staff",
  vndbID: String,
  count: Number
}

const dataList: Data[] = [
  { types: "character", vndbID: "c111506", count: 44.5 },
  { types: "character", vndbID: "c128207", count: 44.5 },
  { types: "vn", vndbID: "v36375", count: 44.5 },
  { types: "vn", vndbID: "v46693", count: 44.5 },
]

</script>
