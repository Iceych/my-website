<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-09 11:03:19
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-01-10 11:32:02
 * @FilePath: /cfh-web/src/views/auth-loading.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <div class="example flex-center" v-if="!sysStore.authList">
    <div v-if="sysStore.authFailed" v-text="sysStore.authFailed"></div>
    <div v-else class="flex-col">
      <span>正在获取权限...</span>
      <div style="height: 5px"></div>
      <a-spin size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSysStore } from '@/stores/sysInfo';

const sysStore = useSysStore();
</script>

<style lang="less" scoped>
.example {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;
}
</style>
