<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-07 13:51:59
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-28 19:44:26
 * @FilePath: /个人项目/src/components/CusBarChart.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <ProChart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { computed, ref, toRaw } from 'vue';

import ProChart from '@/components/ProChart/index.vue';

const props = defineProps(['xAxisData', 'seriesDataList', 'yAxisName', 'extraOption']);

const option = computed(() => {
  const sendData = [];
  const usedData = [];
  const seriesConfig = {
    type: 'bar'
    // barWidth: 40
  };

  const gridTop = computed(() => {
    const { seriesDataList, yAxisName } = toRaw(props);
    if (seriesDataList.length > 1) return 50;
    if (yAxisName) return 30;
    return 10;
  });
  const defaultOption = {
    color: $colorsConfig.multicolor,
    grid: {
      top: gridTop.value,
      left: 0,
      bottom: 0,
      right: 0,
      containLabel: true
    },
    legend: {
      x: 'center',
      top: 0
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          textStyle: {
            color: '#999999',
            margin: 8
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        },
        axisTick: {
          show: false
        },
        data: props.xAxisData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: props.yAxisName,
        axisLabel: {
          textStyle: {
            color: '#999999',
            margin: 4
          }
        },
        nameTextStyle: {
          color: '#999999'
        },
        splitLine: {
          lineStyle: {
            color: '#eeeeee'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: props.seriesDataList.map((item) => ({
      ...seriesConfig,
      name: item.name,
      data: item.data
    }))
  };

  return $tools.mergeObj(defaultOption, props.extraOption);
});
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
