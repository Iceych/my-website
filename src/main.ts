/*
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 1875620109@qq.com
 * @LastEditTime: 2024-08-11 12:23:42
 * @FilePath: /个人项目/src/main.ts
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
 */
import "prismjs/themes/prism.min.css";
import "./assets/main.less";

import componentsGlob from "@/components/index"; // 自动注册自定义全局组件
import router from "@/router/index";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(componentsGlob).use(createPinia()).use(router).use(Antd);

app.mount("#app");
