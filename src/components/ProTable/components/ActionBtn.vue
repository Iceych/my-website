<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-09 16:09:31
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-02-22 14:43:55
 * @FilePath: /cfh-web/src/components/ProTable/components/ActionBtn.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="search-box">
    <!-- 按钮 -->
    <ConfirmBtn
      v-for="item in commonList"
      :key="item.label"
      :btnData="item"
      :record="record"
      :index="index"
    />
    <!-- 更多按钮 -->
    <a-popover v-if="moreList.length" placement="bottom">
      <template #content>
        <div v-for="(item, index) in moreList" :key="index">
          <ConfirmBtn :btnData="item" :record="record" :index="index" />
        </div>
      </template>
      <a-button type="link">...</a-button>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ConfirmBtn from './ConfirmBtn.vue';

const props = defineProps(['btns', 'record', 'index']);

const commonList = computed(() => {
  return props.btns.slice(0, 3);
});
const moreList = computed(() => {
  return props.btns.slice(3);
});
</script>

<style lang="less">
.table-btn-confirm {
  max-width: 300px;
}
</style>
