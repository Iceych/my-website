<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:14:06
 * @FilePath: /个人项目/src/App.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <router-view />
    <authLoading />
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

<style scoped lang="less"></style>
