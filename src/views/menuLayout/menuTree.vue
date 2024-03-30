<!--
 * @Author: chengchunlin 
 * @Date: 2023-11-01 10:06:42
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-02-22 16:30:15
 * @FilePath: /cfh-web/src/views/menuLayout/menuTree.vue
 * @Description: 导航栏树状栏
 * 
 * Copyright (c) 2023 by 天天基金/chengchunlin, All Rights Reserved. 
-->
<template>
  <template v-for="item in props.menus" :key="item.name">
    <a-sub-menu v-if="item.children?.length" :key="'sub' + item.name">
      <template #icon>
        <div class="icon-wrap">
          <RedDot v-if="redDotMap[item.name]" :dotRender="redDotMap[item.name]" />
          <img :src="item.meta.icon" />
        </div>
      </template>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <menu-tree :menus="item.children" />
    </a-sub-menu>
    <a-menu-item class="menu-item" v-else-if="!item.hide" :key="item.name">
      <template #icon>
        <div class="icon-wrap">
          <RedDot v-if="redDotMap[item.name]" :dotRender="redDotMap[item.name]" />
          <img :src="item.meta.icon" />
        </div>
      </template>
      <span>{{ item.meta.title }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import RedDot from './RedDot.vue';
export default {
  name: 'menuTree'
};
</script>

<script lang="ts" setup>
import { useMenusStore } from '@/stores/menusInfo';

const { redDotMap } = useMenusStore();

const props = withDefaults(
  defineProps<{
    menus: Array<any>;
  }>(),
  {
    menus: () => []
  }
);
</script>
<style lang="less" scoped>
.site-layout .site-layout-background {
  background: #fff;
}
.icon-wrap {
  position: relative;
  overflow: visible;
}
</style>
