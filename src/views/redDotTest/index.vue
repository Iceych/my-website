<!--
 * @Author: chengchunlin 
 * @Date: 2023-11-17 16:17:51
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-01-09 10:06:33
 * @FilePath: /cfh-web/src/views/redDotTest/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <a-card>
    <div>每5秒设置一次红点，代码位置(全局搜索: 红点相关逻辑)</div>
    <a-button type="primary" @click="showModal"> 弹窗测试按钮 </a-button>
  </a-card>
</template>

<script setup lang="ts">
import { Modal } from 'ant-design-vue';

const showModal = () => {
  Modal.confirm({
    title: '提示',
    content: '确定要删除吗？',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    }
  });
};
</script>

<style lang="less" scoped></style>
