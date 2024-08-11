<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-10 09:45:59
 * @LastEditors: chengchunlin 1875620109@qq.com
 * @LastEditTime: 2024-08-11 16:15:51
 * @FilePath: /cfh-web/src/views/home/index.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <PageContainer class="page">
    <div class="content">
      <iframe src="/src/assets/pages/前端技术选型.html" frameborder="0">首页</iframe>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
</script>

<style scoped>
.page {
  height: 100%;
}

.content {
  padding: 24px;
  height: 100%;
  background-color: #fff;
}
</style>
