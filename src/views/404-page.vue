<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-28 17:03:03
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-30 18:00:44
 * @FilePath: /个人项目/src/views/404-page.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <div class="page-404 column center">
    <img class="icon" src="/src/assets/img/404.svg" />
    <p class="status">404</p>
    <p class="tips">对不起，你访问的页面不存在</p>
    <a-button @click="goHome()" class="btn" type="primary">回到首页</a-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.replace('/');
};
</script>

<style lang="less" scoped>
.page-404 {
  padding: 48px 32px;
  margin: 24px;
}

.icon {
  margin-bottom: 24px;
}

.status {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  line-height: 1.8;
  text-align: center;
}
.tips {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}
.btn {
  margin-top: 32px;
}
</style>
