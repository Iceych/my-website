<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-07 15:55:48
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-15 13:43:24
 * @FilePath: /cfh-web/src/components/HeartShape.vue
 * @Description: 爱心
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <div :style="sizeStyle" class="heart-box center centerV">
    <div :style="heartStyle" class="heart">
      <div :style="halfStyle" class="half left"></div>
      <div :style="halfStyle" class="half right"></div>
    </div>
    <div v-if="ghost" :style="coverHeartStyle" class="heart heart-cover">
      <div class="half half-cover left"></div>
      <div class="half half-cover right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: { type: Number, default: 16 },
  color: { type: String, default: '#fa5914' },
  ghost: { type: Boolean, default: false }
});
const sizeStyle = computed(() => {
  return { width: `${props.size}px`, height: `${props.size}px` };
});
const heartStyle = computed(() => {
  return { transform: `translate(-50%, -50%) scale(${props.size / 100})` };
});
const halfStyle = computed(() => {
  return { background: props.color };
});

const coverHeartStyle = computed(() => {
  return { transform: `translate(-50%, -50%) scale(${(props.size - 2) / 100})` };
});
</script>

<style lang="less" scoped>
.heart-box {
  aspect-ratio: 1;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.heart {
  position: relative;
  width: 100px;
  height: 100px;
  transform-origin: center;
  left: 50%;
  top: 50%;
  .half {
    position: absolute;
    top: 16px;
    width: 50px;
    height: 80px;
    background: #fa5914;
    border-radius: 50px 50px 0 0;
  }
  .left {
    left: 50px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  .right {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
}

.heart-cover {
  position: absolute;
  left: 50%;
  top: 50%;

  .half-cover {
    background: #fff;
  }
}
</style>
