<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-05 18:01:43
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:15:06
 * @FilePath: /个人项目/src/components/PageContainer.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.page-container {
  width: 100%;
  padding: 16px 24px;
  overflow: auto;
}
</style>
