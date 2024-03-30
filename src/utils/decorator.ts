/*
 * @Author: chengchunlin
 * @Date: 2023-02-07 16:26:19
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-21 09:14:22
 * @FilePath: /back-template/src/utils/decorator.ts
 * @Description: 装饰器
 */
import { message } from 'ant-design-vue';

/**
 * @description request请求的try...catch
 * @returns
 */
export function requestErrCatch(time = 500) {
  return (target, name, descriptor) => {
    return {
      ...descriptor,
      async value(...args: any) {
        try {
          await descriptor.value.apply(this, args);
        } catch (error: any) {
          message.error(error.firstError || '系统繁忙，请稍后重试');
        }
      }
    };
  };
}

/** method节流 */
export function throttleDecorator(time = 0) {
  let handling = false;
  return (target, name, descriptor) => {
    return {
      ...descriptor,
      async value(...args) {
        if (handling) return;

        handling = true;

        try {
          const [res] = await Promise.all([descriptor.value.apply(this, args), $tools.sleep(time)]);
          return res;
        } finally {
          handling = false;
        }
      }
    };
  };
}

export default {
  requestErrCatch,
  throttleDecorator
};
