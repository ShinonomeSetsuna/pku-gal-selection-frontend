<template>
  <n-layout position="absolute" id="page">
    <n-layout-header id="header"></n-layout-header>
    <n-layout position="absolute" id="content" :native-scrollbar="false">
      <n-dialog-provider>
        <n-message-provider>
          <router-view></router-view>
        </n-message-provider>
      </n-dialog-provider></n-layout>
    <n-layout-footer position="absolute" id="footer">Develop&nbsp;By&nbsp;<a
        href="https://github.com/shinonomesetsuna">ShinonomeSetsuna</a></n-layout-footer>
  </n-layout>

</template>

<style scoped>
#header {
  height: 64px;
  background-color: azure
}

#content {
  top: 64px;
  bottom: 64px;
}

#footer {
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NLayout, NLayoutHeader, NLayoutFooter } from 'naive-ui';
import { NDialogProvider, NMessageProvider } from 'naive-ui'
</script>
