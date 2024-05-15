<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-07 13:51:59
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-15 19:12:45
 * @FilePath: /个人项目/src/components/CusPieChart.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <ProChart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import ProChart from '@/components/ProChart/index.vue';

const props = defineProps(['seriesDataList', 'extraOption']);

const option = computed(() => {
  const sendData = [];
  const usedData = [];

  const seriesConfig = {
    type: 'pie',
    radius: ['30%', '77%'],
    center: ['60%', '50%']
    // labelLine: {
    //   show: false
    // },
    // label: {
    //   show: false
    // }
  };
  const defaultOption = {
    color: $colorsConfig.orange.slice(3),
    grid: {
      top: 30,
      left: 0,
      bottom: 30,
      right: 0,
      containLabel: true
    },
    legend: {
      icon: 'circle',
      orient: 'vertical',
      left: 0,
      bottom: 0,
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 8
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} <br/>{c} <br/> 占比 {d}%',
      textStyle: { lineHeight: 24, fontSize: 12, color: '#656565' }
    },
    series: props.seriesDataList.map((item) => ({
      ...seriesConfig,
      name: item.name,
      data: item.data
    }))
  };

  return $tools.mergeObj(defaultOption, props.extraOption, ['color']);
});
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
