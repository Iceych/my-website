<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-30 15:36:46
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-30 16:09:00
 * @FilePath: /个人项目/src/views/css/heart/components/CusHeart2.vue
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
  background:
    radial-gradient(at 70% 31%, var(--c) 29%, #0000 30%),
    radial-gradient(at 30% 31%, var(--c) 29%, #0000 30%),
    linear-gradient(var(--c) 0 0) bottom/100% 50% no-repeat;
  clip-path: polygon(-43% 0, 50% 91%, 143% 0);
}
</style>
