<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-30 15:36:46
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-30 16:06:58
 * @FilePath: /个人项目/src/views/css/heart/components/CusHeart4.vue
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
  position: relative;
  width: 100px;
  height: 100px;
  transform-origin: center;
  // left: 50%;
  top: 50%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 16px;
    width: 50px;
    height: 80px;
    background: #fa5914;
    border-radius: 50px 50px 0 0;
  }
  &::before {
    left: 50px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
}
</style>
