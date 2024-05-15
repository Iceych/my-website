/*
 * @Author: 朱育仪(zhuyuyi@easymoney.com)
 * @Date: 2022-10-18 13:54:05
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-21 09:26:20
 * @FilePath: /back-template/src/types/index.d.ts
 * @Description:
 *
 * Copyright (c) 2022 by 程春霖, All Rights Reserved.
 */
import tools from '@/utils/tools';

/**
 * 用户信息
 */

export interface OptionType {
  value: string | number;
  label: string;
}

declare global {
  type StringArray = String[] | [] | never;

  const $tools = tools;
}
