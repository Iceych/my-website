/*
 * @Author: chengchunlin
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-03-30 18:02:44
 * @FilePath: /个人项目/vite.config.ts
 * @Description: write something
 *
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved.
 */
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
// import basicSSL from '@vitejs/plugin-basic-ssl';
import inject from "@rollup/plugin-inject";
import resolve from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import Markdown from "vite-plugin-md";
import vueJsx from "@vitejs/plugin-vue-jsx";
import babel from "vite-plugin-babel";
import prism from "markdown-it-prism";
import anchor from "markdown-it-anchor";

import injectFiles from "./plugins/injectFiles";

const baseUrlPath = process.env.NODE_ENV === "production" ? "/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrlPath,
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        // add anchor links to your H[x] tags
        md.use(anchor);
        // add code syntax highlighting with Prism
        md.use(prism, { highlightInlineCode: true });
      },
    }),
    vueJsx(),
    // basicSSL(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            { decoratorsBeforeExport: true, version: "2023-05" },
          ],
        ],
      },
    }),
    resolve(),
    inject(injectFiles()),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
        additionalData: `@import "@/assets/var.less";`,
      },
    },
  },
  server: {
    host: "local.1234567.com.cn",
    port: 8084,
    https: false,
  },
});
