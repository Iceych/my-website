<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:15:12
 * @FilePath: /个人项目/src/components/InputNumber/index.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template><a-input v-model:value="data" v-bind="attrs" /></template>

<script setup lang="ts">
import { useAttrs, computed } from "vue";
import { formatIntValue, formatFloatValue } from "./util";

const attrs = useAttrs();

const props = defineProps({
  value: {
    type: [String, Number],
  },
  // 是否浮点
  float: {
    type: Boolean,
    default: false,
  },
  // 最大值
  max: {
    type: Number,
  },
  // 最小值
  min: {
    type: Number,
  },
  // 整数位数
  intPlaces: {
    type: Number,
  },
  // 小数位数
  decimalPlaces: {
    type: Number,
  },
});
const emit = defineEmits(["update:value"]);
const data = computed({
  get() {
    return props.value;
  },
  set(val: string) {
    emit("update:value", props?.float ? formatFloatValue(val, props) : formatIntValue(val, props));
  },
});
</script>
<style lang="less" scoped></style>
