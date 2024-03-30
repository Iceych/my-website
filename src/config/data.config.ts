/*
 * @Author: chengchunlin 
 * @Date: 2023-11-16 13:40:09
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-28 19:43:32
 * @FilePath: /个人项目/src/config/data.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { OptionType } from '@/types/index';
export const couponTypeList: Array<OptionType> = [
  {
    label: '抵扣券',
    value: 0
  },
  {
    label: '定投券',
    value: 1
  },
  {
    label: '费率折扣券',
    value: 2
  },
  {
    label: '投顾抵扣券',
    value: 3
  },
  {
    label: '投顾费率折扣券',
    value: 4
  }
];

// 卡券类型
export const couponTypeConfig = {
  0: '抵扣券',
  1: '定投券',
  2: '费率折扣券',
  3: '投顾抵扣券',
  4: '投顾费率折扣券',
  101: '实物券',
  102: '三方券',
  201: '积分'
};

// 发奖状态
export const statusConfig = {
  0: '草稿',
  1: '审核成功',
  2: '待审核',
  3: '审核失败'
};

export default { couponTypeList, couponTypeConfig, statusConfig };
