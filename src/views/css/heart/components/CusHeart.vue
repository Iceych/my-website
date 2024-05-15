<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-30 15:36:46
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-15 20:12:06
 * @FilePath: /个人项目/src/views/css/heart/components/CusHeart.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
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
    radial-gradient(circle at 60% 65%, var(--c) 64%, #0000 65%) top left/50% 50%,
    radial-gradient(circle at 40% 65%, var(--c) 64%, #0000 65%) top right/50% 50%,
    conic-gradient(from -45deg at 50% 85.5%, var(--c) 90deg, #0000 0) bottom/100% 50%;
  background-repeat: no-repeat;
}
</style>
