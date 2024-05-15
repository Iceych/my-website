<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-08 17:56:47
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-01-08 18:34:16
 * @FilePath: /cfh-web/src/views/menuLayout/RedDot.vue
 * @Description: 侧边栏红点
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <div class="red-dot-wrap">
    <div v-if="type === 1" class="red-dot"></div>
    <component v-else-if="type === 2" :is="dotRender" />
    <div v-else class="dot-wrap" v-text="dotRender"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  dotRender: any;
}>();

const type = computed(() => {
  if (typeof props.dotRender === 'boolean') return 1; // 普通红点
  if (['object', 'function'].includes(typeof props.dotRender)) return 2;
  return 3; // 按字符串展示
});
</script>

<style scoped>
.red-dot-wrap {
  position: absolute;
  top: calc(50%);
  transform: translate(-100%, -50%);
  left: -3px;
}
.red-dot {
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 4px;
}
.dot-wrap {
  background-color: red;
  padding: 3px 2px;
  font-size: 10px;
  border-radius: 100px;
  color: white;
}
</style>
