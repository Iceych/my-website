<!--
 * @Author: chengchunlin 
 * @Date: 2024-03-06 08:24:42
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-27 13:57:55
 * @FilePath: /back-template/src/components/ProTable/components/ConfirmBtn.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-popconfirm
    v-if="btnData.confirm"
    overlayClassName="table-btn-confirm"
    :title="btnData.confirmText"
    :ok-text="btnData.okText || '确定'"
    :cancel-text="btnData.cancelText || '取消'"
    @confirm="confirm(btnData.on)"
  >
    <a-button type="link" size="small">{{ btnData.label }}</a-button>
  </a-popconfirm>
  <a-button v-else type="link" size="small" @click="confirm(btnData.on)">{{
    btnData.label
  }}</a-button>
</template>

<script setup lang="ts">
const props = defineProps(['btnData', 'record', 'index']);
const confirm = (callback: (obj: any) => void) => {
  const res = callback({ record: props.record, index: props.index });
  if (res && res.finally) {
    loading.value = true;
    res.finally(() => {
      loading.value = false;
    });
  }
};
</script>

<style lang="less" scoped>
.table-btn-confirm {
  max-width: 300px;
}
</style>
