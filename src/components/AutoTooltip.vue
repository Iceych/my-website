<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-24 10:56:26
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-02-02 14:46:03
 * @FilePath: /cfh-web/src/components/AutoTooltip.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-tooltip
    :open="showTooltip"
    :overlayInnerStyle="{
      'max-height': '400px',
      'overflow-y': 'auto'
    }"
  >
    <template #title
      ><div @mouseenter="mouseenterTooltipHandle" @mouseleave="mouseleaveTooltipHandle">
        {{ text }}
      </div></template
    >
    <div
      ref="content"
      class="content"
      :style="{
        maxWidth: maxWidth || 'auto'
      }"
      @mouseenter="mouseenterHandle"
      @mouseleave="mouseleaveHandle"
    >
      {{ text }}
    </div>
  </a-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps(['maxWidth', 'text']);

const content = ref();
const showTooltip = ref(false);
let timer = null;
const mouseenterHandle = () => {
  showTooltip.value = content.value.offsetWidth < content.value.scrollWidth;
};
const mouseleaveHandle = () => {
  timer = setTimeout(() => {
    showTooltip.value = false;
  }, 100);
};
const mouseenterTooltipHandle = () => {
  clearTimeout(timer);
  timer = null;
};
const mouseleaveTooltipHandle = () => {
  timer = setTimeout(() => {
    showTooltip.value = false;
  }, 100);
};
</script>

<style lang="less" scoped>
.content {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
