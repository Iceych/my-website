<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-07 13:51:59
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-28 19:44:22
 * @FilePath: /个人项目/src/components/CusLineChart.vue
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

const props = defineProps(['xAxisData', 'seriesDataList', 'yAxisName', 'extraOption']);

const option = computed(() => {
  const sendData = [];
  const usedData = [];

  const seriesConfig = {
    type: 'line',
    smooth: true,
    symbolSize: 8,
    showSymbol: false
  };
  const defaultOption = {
    color: $colorsConfig.multicolor,
    grid: {
      top: 30,
      left: 10,
      bottom: 30,
      right: 0,
      containLabel: true
    },
    legend: {
      icon: 'rect',
      x: 'center',
      bottom: 0,
      itemWidth: 8,
      itemHeight: 2,
      data: props.seriesDataList.map((item) => item.name)
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
        max: 'dataMax',
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
