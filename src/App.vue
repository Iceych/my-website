<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-27 11:04:37
 * @FilePath: /个人项目/src/App.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <router-view />
    <authLoading />
    <textarea class="emptyInput" id="copyInput" readonly />
  </a-config-provider>
</template>

<script setup lang="ts">
import theme from "@/assets/theme";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import "dayjs/locale/zh-cn";
import dayjs from "dayjs";
import authLoading from "./views/auth-loading.vue";

dayjs.locale("zh-cn");
</script>

<style scoped lang="less">
.emptyInput {
  position: absolute;
  left: -100px;
  top: -100px;
  width: 100px;
  border: 0;
  padding: 0;
  margin: 0;
  z-index: -9999;
}
</style>
