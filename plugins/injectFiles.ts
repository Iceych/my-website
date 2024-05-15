/*
 * @Author: chengchunlin 
 * @Date: 2024-03-22 13:23:26
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-22 13:41:18
 * @FilePath: /back-template/plugins/injectFiles.ts
 * @Description: write something
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

export default () => {
  const res: any = {
    $tools: fileURLToPath(new URL('../src/utils/tools.ts', import.meta.url))
  };
  const dirList = [
    {
      baseUrl: 'src/api',
      reg: /(.*)\.service\.(js|ts)/g,
      keyGenerator(fileName: string) {
        return `$${fileName}Api`;
      }
    },
    {
      baseUrl: 'src/config',
      reg: /(.*)\.config\.(js|ts)/g,
      keyGenerator(fileName: string) {
        return `$${fileName}Config`;
      }
    }
  ];

  dirList.forEach(({ baseUrl, reg, keyGenerator }) => {
    if (existsSync(baseUrl)) {
      readdirSync(baseUrl).forEach((file) => {
        if (new RegExp(reg).test(file)) {
          res[keyGenerator(RegExp.$1)] = fileURLToPath(
            new URL(`../${baseUrl}/${file}`, import.meta.url)
          );
        }
      });
    }
  });
  return res;
};
