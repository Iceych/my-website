<!--
 * @Author: chengchunlin 
 * @Date: 2023-11-01 10:06:42
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:12:28
 * @FilePath: /个人项目/src/views/menuLayout/index.vue
 * @Description: 侧边导航栏 布局
 * 
 * Copyright (c) 2023 by 天天基金/chengchunlin, All Rights Reserved. 
-->
<template>
  <a-layout class="wrap">
    <a-layout-sider
      class="sider"
      :width="256"
      v-model:collapsed="collapsed"
      collapsible
      theme="light"
    >
      <div :class="['logo-title', { collapsed }]">
        <img class="logo" src="@/assets/img/logo.png" />
        <span v-if="!collapsed" class="title noSelect">天天基金</span>
      </div>
      <a-menu
        :selectedKeys="[route.meta?.menuName || route.name]"
        :openKeys="openKeys"
        mode="inline"
        @click="clickItem"
      >
        <menu-tree :menus="menuStore.menus" />
      </a-menu>
      <!-- 展开/收起按钮 -->
      <template #trigger>
        <div class="collapsed">
          <menu-unfold-outlined v-show="collapsed" />
          <menu-fold-outlined v-show="!collapsed" />
        </div>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div class="nav-title flex-row ai-center">{{ menuStore.menusTitle }}</div>
        <div class="flex"></div>
        <div class="login-info flex-row ai-center">
          <a-tooltip
            :title="isFullscreen ? '退出全屏' : '全屏'"
            :mouseEnterDelay="0.5"
            placement="bottom"
          >
            <component
              :is="isFullscreen ? FullscreenExitOutlined : FullscreenOutlined"
              @click="toggle"
            />
          </a-tooltip>
          <a-dropdown>
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1"> 退出登录 </a-menu-item>
              </a-menu>
            </template>
            <div class="flex-row ai-center">
              <a-avatar class="avatar" :size="28"> U</a-avatar>
              <div class="user-name">程春霖</div>
            </div>
          </a-dropdown>
          <!-- <a-tooltip title="退出登录" placement="bottom">
            <poweroff-outlined @click="loginout" />
          </a-tooltip> -->
        </div>
      </a-layout-header>
      <a-layout-content class="content-wrap">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade" mode="out-in" :duration="{ enter: 100, leave: 100 }">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, h, computed } from "vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ExclamationCircleOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import menuTree from "./menuTree.vue";
import { useRoute, useRouter } from "vue-router";
import { Modal } from "ant-design-vue";
// import { toLogout } from '@/utils/OALogin';
import { useFullscreen } from "@vueuse/core";
import { useMenusStore } from "@/stores/menusInfo";

const collapsed = ref<boolean>(false);

const route = useRoute();
const router = useRouter();
const menuStore = useMenusStore();

const openKeys = computed(() => {
  if (!collapsed.value) {
    return route.fullPath
      .split("/")
      .slice(1)
      .map((item) => `sub${item}`);
  } else {
    return [];
  }
});

/** @description 导航栏点击 */
const clickItem = ({ key }: { key: string }) => {
  router.push({ name: key });
};

/** @description 退出登录 */
const loginout = () => {
  Modal.confirm({
    title: "温馨提示",
    icon: h(ExclamationCircleOutlined),
    content: "是否确认退出系统",
    okText: "确定",
    okType: "danger",
    cancelText: "取消",
    centered: true,
    onOk() {
      // toLogout();
    },
  });
};

const handleMenuClick = (e: any) => {
  switch (e.key) {
    case "1":
      loginout();
      break;
    default:
  }
};

// 全屏切换
const { toggle, isFullscreen } = useFullscreen();
</script>
<style lang="less" scoped>
.wrap {
  height: 100%;
}
.sider {
  position: relative;
  z-index: 99;
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.12);
}
.logo-title {
  padding: 16px 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3s;
  overflow: hidden;
}
.logo-title.collapsed {
  padding-left: 23px;
}
.logo {
  width: 32px;
  height: 32px;
  border-radius: 5px;
  margin-right: 10px;
}
.title {
  font-weight: 700;
  font-size: 16px;
  white-space: noWrap;
  color: #fb7a43;
}

.nav-title {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #181818;
  letter-spacing: 0;
  line-height: 32px;
  font-weight: 400;
}
.collapsed {
  display: flex;
  padding: 15px 24px;
}
.header {
  background: #fff;
  padding: 0px 24px;
  display: flex;
  line-height: 1 !important;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.12);
  z-index: 10;
}
.avatar {
  margin-left: 12px;
  color: #f56a00;
  background-color: #fde3cf;
}
.vip-icon {
  position: absolute;
  width: 14px;
  height: 14px;
  bottom: 0;
  right: 0;
}
.user-name {
  margin: 0 12px;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.content-wrap {
  height: 100%;
  overflow: auto;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0.2;
  transform: translate(6px, 4px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
