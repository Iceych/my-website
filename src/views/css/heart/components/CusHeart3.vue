<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-30 15:36:46
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-30 16:08:39
 * @FilePath: /个人项目/src/views/css/heart/components/CusHeart3.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <div class="heart"></div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.heart {
  --c: #fa5914;
  width: 100px;
  aspect-ratio: 1;
  border-image: radial-gradient(var(--c) 69%, #0000 70%) 84.5%/50%;
  clip-path: polygon(-42% 0, 50% 91%, 142% 0);
}
</style>
