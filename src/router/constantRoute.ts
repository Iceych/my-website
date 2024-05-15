/*
 * @Author: chengchunlin 
 * @Date: 2024-01-10 09:36:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-06 17:18:31
 * @FilePath: /cfh-web/src/router/constantRoute.ts
 * @Description: 无需权限的静态路由
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */
import { type RouteRecordRaw } from 'vue-router';

const routeList: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404-page.vue'),
    meta: {
      title: '404'
    }
  }
];

export default routeList;
