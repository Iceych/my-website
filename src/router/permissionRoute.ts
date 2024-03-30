/*
 * @Author: chengchunlin 
 * @Date: 2023-11-01 09:31:33
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-28 19:52:56
 * @FilePath: /个人项目/src/router/permissionRoute.ts
 * @Description: 带权限的路由
 *
 * Copyright (c) 2023 by 天天基金/chengchunlin, All Rights Reserved.
 */
import { type RouteRecordRaw } from "vue-router";
import MenuLayOut from "@/views/menuLayout/index.vue"; // 这个是管理系统左侧菜单

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
    redirect: { name: "home" },
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
