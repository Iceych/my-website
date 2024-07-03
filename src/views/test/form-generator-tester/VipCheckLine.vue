<!--
 * @Autor: 员嘉煊 (yuanjiaxuan@eastmoney.com)
 * @Date: 2024-04-28 16:34:29
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-16 14:28:42
 * @FilePath: /cfh-web/src/views/config/other/upgradeCoupon/components/VipCheckLine.vue
 * @Description: 
-->
<template>
  <div>
    <a-checkbox :checked="value" :disabled="disabled" @change="onChange"
      >参加天天基金VIP设计活动</a-checkbox
    >
    <span class="tips">*参加活动卡券不支持在其他场景进行投放。</span>
  </div>
</template>

<script setup>
defineProps(['value', 'disabled']);
const emit = defineEmits(['update:value']);

function onChange(e) {
  emit('update:value', e.target.checked);
}
</script>

<style lang="less" scoped>
.tips {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: rgba(153, 153, 153, 0.85);
  line-height: 22px;
  font-weight: 400;
  margin-left: 12px;
}
</style>
