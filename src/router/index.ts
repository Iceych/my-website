/*
 * @Author: chengchunlin 
 * @Date: 2024-03-06 08:24:42
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:12:05
 * @FilePath: /个人项目/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import { useSysStore } from "@/stores/sysInfo";
import { handleRoutes } from "./routeHandle";
import constantRoute from "./constantRoute"; // 静态无权限路由

const routes: RouteRecordRaw[] = [...constantRoute];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!useSysStore().authList) {
    await handleRoutes(); // 动态获取路由
    const { path, query } = to;
    next({ path, query, replace: true });
  } else {
    next(true);
  }
});

router.afterEach((to) => {
  window.document.title = (to.meta.title as string)
    ? to.meta.title + " - 天天基金"
    : window.document.title;
});
export default router;
