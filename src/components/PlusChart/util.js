/*
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-05-13 14:26:32
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-13 14:36:08
 * @FilePath: /cfh-web/src/components/PlusChart/util.js
 * @Description: write something
 *
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved.
 */
export const initSearchParam = (config) => {
  return config.reduce((res, item) => {
    const { model, default: defaultValue } = item;
    res[model] = defaultValue;
    return res;
  }, {});
};

export default { initSearchParam };
