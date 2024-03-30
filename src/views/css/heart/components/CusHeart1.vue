<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-30 15:36:46
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-30 16:09:08
 * @FilePath: /个人项目/src/views/css/heart/components/CusHeart1.vue
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
    conic-gradient(from -45deg at 50% 84%, var(--c) 90deg, #0000 0) bottom/100% 50% no-repeat;
}
</style>
