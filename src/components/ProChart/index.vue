<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-26 11:06:12
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:17:09
 * @FilePath: /个人项目/src/components/ProChart/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="chart-container">
    <div class="chart-box" ref="chartRef"></div>
    <a-empty v-if="noData" class="no-data" />
  </div>
</template>
<style lang="less" scoped>
.chart-container {
  position: relative;
  .chart-box {
    width: 100%;
    height: 100%;
  }
  :deep(.no-data) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-empty-image {
      height: 92px;
      margin-bottom: 0;
    }
    svg {
      width: 92px;
      height: 76px;
    }
    .ant-empty-description {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
<script setup lang="ts">
// @ts-nocheck
import { useResizeObserver } from '@vueuse/core';
import echarts from './chart';

import { toRefs, onMounted, onBeforeUnmount, watch, ref } from 'vue';
const props = defineProps({
  option: {
    type: Object,
    default: () => {}
  }
});
const { option } = toRefs(props);

let chartInstance = null;
const chartRef = ref(null);
const noData = ref(false);

watch(
  () => option,
  (newValue) => {
    newValue.value && setOptions(newValue.value);
  },
  { deep: true }
);

onMounted(() => {
  initChart();
  useResizeObserver(chartRef.value, resize);
});

onBeforeUnmount(() => {
  chartInstance.dispose();
});

function initChart() {
  chartInstance = echarts.init(chartRef.value);
  // if (option.value) {
  //   setOptions(option.value);
  // }
}
function resize() {
  chartInstance?.resize();
}
function setOptions(options) {
  if (!chartInstance) return;
  if (options.series[0].data.length === 0) {
    noData.value = true;
  } else {
    noData.value = false;
  }
  chartInstance.setOption(options);
}
function getChart() {
  return chartInstance;
}
defineExpose({
  getChart
});
</script>
