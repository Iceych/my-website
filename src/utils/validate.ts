/*
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-21 09:13:37
 * @FilePath: /back-template/src/utils/validate.ts
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
 */
interface RuleItem {
  value: string;
  type: string;
  trigger: string;
}
const validator = (r: any, v: any, c: (str?: string) => void) => {
  if ($tools.isEmpty(v) || ($tools.isArr(v) && !v.length)) return Promise.reject('该项为必填项');
  else return Promise.resolve();
};

export const required = (item?: any) => {
  const { type = 'string', trigger = null } = item || {};
  return {
    required: true,
    type,
    trigger,
    validator
  };
};

// 嵌套逻辑最多两层
export const createRules = (dicArr: Array<string | RuleItem>) => {
  return dicArr.reduce((pre: Record<string, any>, cur: string | RuleItem) => {
    if (typeof cur === 'string') {
      if (cur.includes('.')) {
        const arr: string[] = cur.split('.');
        pre[arr[0]] = {
          [arr[1]]: [required()]
        };
      } else {
        pre[cur] = [required()];
      }
    } else {
      if (cur.value.includes('.')) {
        const arr: string[] = cur.value.split('.');
        pre[arr[0]] = {
          [arr[1]]: [required(cur)]
        };
      } else {
        pre[cur.value] = [required(cur)];
      }
    }
    return pre;
  }, {});
};
