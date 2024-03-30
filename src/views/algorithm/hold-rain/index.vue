<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-28 19:52:44
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 14:29:03
 * @FilePath: /个人项目/src/views/algorithm/hold-rain/index.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <PageContainer class="hold-rain">
    <div class="content">
      <MD id="markdown"/>
    </div>
  </PageContainer>
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";

import MD from "./docs/接雨水.md";
console.log(MD);
</script>

<style lang="less" scoped>
.hold-rain {
}
.content {
  background: #fff;
}
</style>
