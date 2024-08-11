/*
 * @Author: chengchunlin
 * @Date: 2023-11-01 09:31:33
 * @LastEditors: chengchunlin 1875620109@qq.com
 * @LastEditTime: 2024-08-11 14:18:53
 * @FilePath: /个人项目/src/router/permissionRoute.ts
 * @Description: 带权限的路由
 *
 * Copyright (c) 2023 by 程春霖, All Rights Reserved.
 */
import MenuLayOut from "@/views/menuLayout/index.vue"; // 这个是管理系统左侧菜单
import { type RouteRecordRaw } from "vue-router";

import BaseIcon from "@/assets/img/base.svg";

/**
 * 菜单栏 /menu 下的子路由 注意事项！！！！！！！！！！！！！！！！！！！！！
 * 每一个路由都必须有唯一name,该路由表和侧边导航栏绑定，通过name进行路由跳转
 * meta里的title 显示为导航栏的名称，也必须有
 * meta里的icon不必须
 * meta里authid用于校验权限，没有该id视为默认渲染
 * ！！！！！！！！！！！！！！！！！！！！！
 */
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    component: MenuLayOut,
    redirect: { name: "fun" },
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "首页",
          icon: BaseIcon,
        },
      },
      {
        path: "standard",
        name: "standard",
        meta: {
          title: "规范",
          icon: BaseIcon,
        },
        redirect: { name: "project-standard" },
        children: [
          {
            path: "project-standard",
            name: "project-standard",
            meta: {
              title: "项目规范",
            },
            component: () => import("@/views/standards/project.vue"),
          },
          {
            path: "js-standard",
            name: "js-standard",
            meta: {
              title: "js规范",
            },
            component: () => import("@/views/standards/js.vue"),
          },
          {
            path: "css-standard",
            name: "css-standard",
            meta: {
              title: "css规范",
            },
            component: () => import("@/views/standards/css.vue"),
          },
          {
            path: "component-standard",
            name: "component-standard",
            meta: {
              title: "组件分类",
            },
            component: () => import("@/views/standards/component.vue"),
          },
          {
            path: "name-standard",
            name: "name-standard",
            meta: {
              title: "命名规范",
            },
            component: () => import("@/views/standards/name.vue"),
          },
        ],
      },
      {
        path: "fun",
        name: "fun",
        meta: {
          title: "常用方法",
          icon: BaseIcon,
        },
        component: () => import("@/views/common/index.vue"),
      },
      {
        path: "algorithm",
        name: "algorithm",
        meta: {
          title: "算法",
          icon: BaseIcon,
        },
        redirect: { name: "holdRain" },
        children: [
          {
            path: "holdRain",
            name: "holdRain",
            meta: {
              title: "接雨水",
            },
            component: () => import("@/views/algorithm/hold-rain/index.vue"),
          },
          {
            path: "sortOffset",
            name: "sortOffset",
            meta: {
              title: "位移排序",
            },
            component: () => import("@/views/algorithm/sort-offset/index.vue"),
          },
        ],
      },
      {
        path: "css",
        name: "css",
        meta: {
          title: "css",
          icon: BaseIcon,
        },
        redirect: { name: "heart" },
        children: [
          {
            path: "heart",
            name: "heart",
            meta: {
              title: "爱心",
            },
            component: () => import("@/views/css/heart/index.vue"),
          },
          {
            path: "tree",
            name: "tree",
            meta: {
              title: "画树",
            },
            component: () => import("@/views/css/tree/index.vue"),
          },
        ],
      },
      {
        path: "vite",
        name: "vite",
        meta: {
          title: "vite",
          icon: BaseIcon,
        },
        redirect: { name: "config" },
        children: [
          {
            path: "config",
            name: "config",
            meta: {
              title: "基本配置",
            },
            component: () => import("@/views/vite/baseConfig/index.vue"),
          },
        ],
      },
      {
        path: "git",
        name: "git",
        meta: {
          title: "git",
          icon: BaseIcon,
        },
        redirect: { name: "command" },
        children: [
          {
            path: "command",
            name: "command",
            meta: {
              title: "常用命令",
            },
            component: () => import("@/views/git/commonCommands.vue"),
          },
          {
            path: "deleteBranch",
            name: "deleteBranch",
            meta: {
              title: "清除本地分支",
            },
            component: () => import("@/views/git/deleteLocalBranch.vue"),
          },
        ],
      },
      {
        path: "node",
        name: "node",
        meta: {
          title: "node",
          icon: BaseIcon,
        },
        redirect: { name: "nodeVersionSwitch" },
        children: [
          {
            path: "nodeVersionSwitch",
            name: "nodeVersionSwitch",
            meta: {
              title: "node版本切换",
            },
            component: () => import("@/views/node/switchVersion.vue"),
          },
        ],
      },
      {
        path: "vscode",
        name: "vscode",
        meta: {
          title: "vscode",
          icon: BaseIcon,
        },
        redirect: { name: "base" },
        children: [
          {
            path: "base",
            name: "base",
            meta: {
              title: "常用配置",
            },
            component: () => import("@/views/vscode/base.vue"),
          },
          {
            path: "deleteBranch",
            name: "deleteBranch",
            meta: {
              title: "常用插件",
            },
            component: () => import("@/views/vscode/commonPlugin.vue"),
          },
        ],
      },
    ],
  },
  /**
   * 404不能放入静态路由里，不然刷新的时候默认会匹配到404上
   */
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

export default routes;
