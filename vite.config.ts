/*
 * @Author: chengchunlin
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-15 19:35:09
 * @FilePath: /个人项目/vite.config.ts
 * @Description: write something
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
// import basicSSL from '@vitejs/plugin-basic-ssl';
import inject from "@rollup/plugin-inject";
import resolve from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import anchor from "markdown-it-anchor";
import prism from "markdown-it-prism";
import Components from "unplugin-vue-components/vite";
import babel from "vite-plugin-babel";
import Markdown from "vite-plugin-md";

import injectFiles from "./plugins/injectFiles";

const baseUrlPath = process.env.NODE_ENV === "production" ? "/my-website" : "/";

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
    host: "localhost",
    port: 8084,
    https: false,
  },
});
