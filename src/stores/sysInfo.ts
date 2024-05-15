/*
 * @Author: chengchunlin 
 * @Date: 2024-01-08 16:40:00
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-06 18:08:38
 * @FilePath: /cfh-web/src/stores/sysInfo.ts
 * @Description: 系统相关数据（路由表）
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type RouteRecordRaw } from 'vue-router';

export const useSysStore = defineStore('sysStore', () => {
  const authList = ref<Array<any> | null>(null); // 权限列表
  const authFailed = ref('');

  const setRouteList = (list: Array<RouteRecordRaw>) => {
    authList.value = list;
  };

  const setAuthFailed = (str: string = 'Unknow Error') => {
    authFailed.value = str;
  };

  return {
    authList,
    setRouteList,
    setAuthFailed,
    authFailed
  };
});
