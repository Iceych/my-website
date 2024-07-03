<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-04-23 09:44:39
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-04-23 10:12:51
 * @FilePath: /cfh-web/src/components/BtnLoading.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <a-button :loading="loading">
    <template v-for="(_, name) in $slots" #[name]="scopedProps = {}"
      ><slot :name="name" v-bind="scopedProps"></slot
    ></template>
    <slot></slot>
  </a-button>
</template>

<script setup>
import { ref } from 'vue';
const loading = ref(false);
const showLoading = () => {
  loading.value = true;
};
const hideLoading = () => {
  loading.value = false;
};

defineExpose({ showLoading, hideLoading });
</script>

<style lang="less" scoped></style>
