<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-20 11:09:27
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-20 11:31:54
 * @FilePath: /cfh-web/src/components/ProTable/components/RankNum.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
-->
<template>
  <div class="row center centerV">
    <p :style="numStyle" class="num">{{ props.num + 1 }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({ num: { type: Number, default: 0 } });

const colors = ['#F73E3E', '#FA5914', '#FAA614'];

const numStyle = computed(() => {
  return { background: colors[props.num], color: colors[props.num] ? '#fff' : '' };
});
</script>

<style lang="less" scoped>
.num {
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  border-radius: 3.2px;
}
</style>
