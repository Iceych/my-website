<template>
  <div class="container" ref="container" :style="{ '--beforeHeight': marginTop + 'px' }">
    <a-tooltip
      :open="showTooltip"
      :overlayInnerStyle="{
        'max-height': '400px',
        'overflow-y': 'auto',
      }"
    >
      <template #title
        ><div @mouseenter="mouseenterTooltipHandle" @mouseleave="mouseleaveTooltipHandle">
          {{ text }}
        </div></template
      >
      <div class="mark"></div>
    </a-tooltip>
    <div class="ellipsis" v-if="isShowEllipsis">...</div>
    <div
      class="content"
      :style="{
        marginTop: -marginTop + 'px',
      }"
      @mouseenter="mouseenterHandle"
      @mouseleave="mouseleaveHandle"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
const container = ref();
const marginTop = ref(0);
const isShowEllipsis = ref(false);
const showTooltip = ref(false);
let timer = null;
const props = defineProps({
  // 文本
  text: {
    type: String,
    default: "",
  },
  // 行数
  lines: {
    type: Number,
    default: 1,
  },
});

watch(
  () => props.text,
  () => {
    nextTick(() => {
      isShowEllipsis.value = container.value.scrollHeight > container.value.offsetHeight;
      marginTop.value = (container.value.clientHeight / props.lines) * (props.lines - 1);
    });
  },
  { immediate: true }
);
const mouseenterHandle = () => {
  showTooltip.value = container.value.offsetHeight < container.value.scrollHeight;
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
.container {
  position: relative;
  overflow: hidden;
  &::before {
    display: block;
    content: "";
    height: var(--beforeHeight);
  }
  .content {
    word-break: break-all;
  }
}
.ellipsis {
  float: right;
}
.mark {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -9;
}
</style>
