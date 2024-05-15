/*
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:14:49
 * @FilePath: /个人项目/src/components/index.ts
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
 */
import type { App } from "vue";
// const files = import.meta.glob('./*.vue'); // 异步
// const filesJs = import.meta.glob('./*.js');
export default {
  install(app: App) {
    // 引入所有组件下的安装模块
    const modules: any = import.meta.globEager("./*.vue"); // 同步
    for (const key in modules) {
      const start = key.lastIndexOf(".");
      const end = key.lastIndexOf("/") + 1;
      const cName = key.slice(end, start);
      app.component(cName, modules[key].default);
    }
  },
};
