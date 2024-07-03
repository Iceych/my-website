<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-05-14 15:38:17
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-26 16:37:52
 * @FilePath: /cfh-web/src/components/RangePickerLimit.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <a-range-picker
    :value="hackValue || value"
    :disabled-date="disabledDate"
    @change="onChange"
    @calendarChange="onCalendarChange"
    @openChange="onOpenChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  value: { type: Array, default: () => [] },
  disabledDateHandle: { type: Function, default: () => false }
});
const emit = defineEmits(['change', 'update:value']);

const dates = ref();
const hackValue = ref();

const disabledDate = (current) => {
  // if (!dates.value || dates.value.length === 0) {
  //   return false;
  // }

  return props.disabledDateHandle?.(current, dates.value);
};
const onChange = (val) => {
  emit('update:value', val);
  emit('change', val);
};

const onCalendarChange = (val) => {
  dates.value = val;
};

const onOpenChange = (open) => {
  if (open) {
    dates.value = [];
    hackValue.value = [];
  } else {
    hackValue.value = undefined;
  }
};
</script>

<style lang="less" scoped></style>
