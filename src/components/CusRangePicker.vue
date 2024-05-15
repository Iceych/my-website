<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-11 18:05:08
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-20 17:15:07
 * @FilePath: /cfh-web/src/components/CusRangePicker.vue
 * @Description: 带预设时间的时间选择器
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <div class="select-box row center">
    <label>选择时间：</label>
    <a-select
      placeholder="请选择"
      :options="options"
      :value="props.value.timeType"
      @change="onSelect"
      size="small"
      class="cusSelect"
    />
    <a-range-picker
      v-if="props.value.timeType === 1"
      :value="props.value.time"
      @change="onChange"
      size="small"
      :presets="presets"
    />
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from 'vue';

const props = defineProps({
  value: { type: Number, default: { timeType: 2, time: '' } }
});
const emit = defineEmits('change', 'update:value');

const options = [
  { label: '自定义', value: 1 },
  { label: '上一交易日', value: 2 },
  { label: '过去7天', value: 3 },
  { label: '过去30天', value: 4 },
  { label: '过去6个月', value: 5 },
  { label: '今年来', value: 6 }
];

const presets = [
  { label: '上一交易日', value: [dayjs().subtract(1, 'day'), dayjs().subtract(1, 'day')] },
  { label: '过去7天', value: [dayjs().subtract(7, 'day'), dayjs().subtract(1, 'day')] },
  { label: '过去30天', value: [dayjs().subtract(30, 'day'), dayjs().subtract(1, 'day')] },
  { label: '去6个月', value: [dayjs().subtract(6, 'month'), dayjs().subtract(1, 'day')] },
  { label: '今年以来', value: [dayjs().startOf('year'), dayjs().subtract(1, 'day')] }
];

const onSelect = (value) => {
  emit('change', { timeType: value });
  emit('update:value', { timeType: value });
};

const onChange = (dates) => {
  emit('change', { timeType: props.value.timeType, time: dates });
  emit('update:value', { timeType: props.value.timeType, time: dates });
};
</script>

<style lang="less" scoped>
.select-box {
  label {
    text-wrap: nowrap;
  }
}
.cusSelect {
  width: 120px;
  min-width: 120px;
  margin-right: 16px;
}
</style>
