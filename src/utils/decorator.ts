/*
 * @Author: chengchunlin
 * @Date: 2023-02-07 16:26:19
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-07-03 18:35:06
 * @FilePath: /个人项目/src/utils/decorator.ts
 * @Description: 装饰器
 */
import { message } from 'ant-design-vue';
import { ref } from 'vue';

/**
 * @description async方法装饰器 - 方法处理时长超过time后显示loading
 * @param target 被装饰的函数
 * @param loadingInfo 显示loading相关的配置
 * @param loadingInfo.loadingRef 要显示loading的ref组件引用，组件内需包含showLoading和hideLoading方法
 * @param loadingInfo.showLoading 显示loading的函数
 * @param loadingInfo.hideLoading 隐藏loading的函数
 * @param time 等待时长 - 默认500ms
 * 
 * @example 
 * ```js
 * delayLoading(
    async () => {
      await requestData?.();
    },
    { showLoading, hideLoading }
  )
  ```
 */
export function delayLoading(
  target = () => {},
  { loading = ref(), loadingRef = ref(), showLoading = () => {}, hideLoading = () => {} } = {},
  time = 500
) {
  return async function (this: any, ...args: any) {
    let timer = setTimeout(() => {
      loading.value = true;
      loadingRef.value?.showLoading?.();
      showLoading?.();
    }, time);
    try {
      await target.apply(this, args);
    } catch (e: any) {
      console.error(e);
      message.error(e?.firstError || '出错啦');
    } finally {
      clearTimeout(timer);
      timer = 0;
      loadingRef.value?.hideLoading?.();
      hideLoading?.();
      loading.value = false;
    }
  };
}

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
