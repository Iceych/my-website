<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-05-13 13:29:12
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-07 14:52:53
 * @FilePath: /cfh-web/src/components/PlusChart/components/SubTitlePlus.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <sub-title>
    <template #left>
      <slot name="left">
        <Tips v-if="tips" :tips="tips" />
        <p v-else-if="subTitle" class="subTitle">{{ subTitle }}</p>
      </slot>
    </template>
    <template #right>
      <slot name="right" />
    </template>
  </sub-title>
</template>

<script setup>
defineProps({
  tips: { type: [String, Array], default: '' },
  subTitle: { type: String, default: '' }
});
</script>

<style lang="less" scoped></style>
