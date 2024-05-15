/*
 * @Author: chengchunlin
 * @Date: 2023-11-01 08:55:13
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-07 13:53:00
 * @Description: 常用通用工具函数
 *
 * Copyright (c) 2023 by 程春霖, All Rights Reserved.
 */
import { message } from "ant-design-vue";

export const isArr = (value: any) => Object.prototype.toString.call(value) === "[object Array]";

export const isFunc = (value: any) => Object.prototype.toString.call(value) === "[object Function]";

export const isObj = (value: any) => Object.prototype.toString.call(value) === "[object Object]";

export const isNum = (value: any) => Object.prototype.toString.call(value) === "[object Number]";

export const isStr = (value: any) => Object.prototype.toString.call(value) === "[object String]";

export const isBool = (value: any) => Object.prototype.toString.call(value) === "[object Boolean]";

export const isDef = (value: any) => Object.prototype.toString.call(value) !== "[object Undefined]";

export const isNull = (value: any) => Object.prototype.toString.call(value) === "[object Null]";

export const isNaN = (value: any) => +value !== +value;
// 是否为空
export const isEmpty = (val: any) => !isDef(val) || isNull(val) || val === "";

/**
 * @param {string} name 需要获取的参数名称
 * @desc 获取路径上参数
 */
export function getQueryString(name: string) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const r = window.location.search.slice(1).match(reg);
  if (r !== null) return decodeURIComponent(r[2]);
  return null;
}

/** 生成唯一随机uid */
export function getUuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** 数组中随机取一项 */
export const getRandomItemByArray = (arr: Array<any>) => {
  if (arr?.length <= 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
};

/** 数组乱序 */
export const shuffle = (arr: Array<any>) => {
  for (let i = arr.length; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
  return arr;
};

/**
 * @description 睡眠函数
 * @param {Number} time
 * @returns
 * await sleep(2)
 */
export const sleep = (time: number) => {
  if (!isNum(time)) throw new Error(`sleeph => 参数必须为数字`);
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

/**
 * @description 将 对象数组 结构 转为 key-value结构
 * @param {Array} arr 原数组
 * @param {String} key 作为key的字段
 * @returns {Object}
 */
export const arrayToMap = (arr: Array<Record<string, any>>, key: string) => {
  if (!isArr(arr)) throw new Error(`arrayToMap => 必须是数组`);
  return arr.reduce((pre, cur) => {
    if (cur[key] !== null && cur[key] !== undefined) {
      pre[cur[key]] = cur;
    }
    return pre;
  }, {});
};

/**
 * @description 永不失败的Promise
 * @param {Any} task 原任务
 * @param {Any} defaultVal 如果失败了返回的默认值
 * @returns {Promise}
 */
export const neverFail = (task: any, defaultVal = null) => {
  return new Promise(async (resolve) => {
    try {
      const data = await task;
      resolve(data || defaultVal);
    } catch (error) {
      resolve(defaultVal);
    }
  });
};

/**
 * @description 获取[min,max)之间的随机数
 * @param {Number} min
 * @param {Number} max
 * @returns {number}
 */
export function random(min: number, max: number) {
  let minNum = min,
    maxNum = max;
  if (minNum > maxNum) {
    [minNum, maxNum] = [maxNum, minNum];
  }
  return Math.random() * (maxNum - minNum) + minNum;
}

/**
 * @description 获取[min,max]之间的随机整数
 * @param {Number} min
 * @param {Number} max
 * @returns {number}
 */
export function randomInt(min: number, max: number) {
  let minNum = min,
    maxNum = max;
  if (minNum > maxNum) {
    [minNum, maxNum] = [maxNum, minNum];
  }
  return Math.floor(random(minNum, maxNum + 1));
}

/**
 * @description 检查手机号是否正确
 * @param {String} phone 手机号
 */
export const checkPhone = (phone: string) => {
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone);
};

/**
 * @description 字符串长度，区分中文字符
 * @param {String} str 字符串
 */
export function strlen(str: string) {
  let len = 0;
  for (let i = 0; i < str.length; ) {
    const code = str.codePointAt(i) || 0;

    if (code <= 255) len += 0.5;
    // else if (code > 65535) len += 2;
    else len += 1;

    if (code > 65535) i += 2;
    else i += 1;
  }
  return len;

  // let len = 0;
  // for (let i = 0; i < str.length; i += 1) {
  //   const isChinese = /[\u4e00-\u9fa5,\uff01-\uffee]/.test(str[i]); // 是否中文
  //   const isUpper = /[A-Z]/.test(str[i]); // 是否大写
  //   const charLen = isChinese || isUpper ? 1 : 0.5;
  //   len += charLen;
  // }
  // return len;
}

/**
 * @description 从指定位置截取指定长度的字符串
 * @param str
 * @param count
 * @param start
 * @returns
 */
function sliceStr(str: String, count = Infinity, start = 0) {
  let len = 0,
    res = "";
  for (let i = start; i < str.length; ) {
    const code = str.codePointAt(i) || 0,
      char = String.fromCodePoint(code);

    if (code <= 255) len += 0.5;
    // else if (code > 65535) len += 2;
    else len += 1;

    res += char;

    if (code > 65535) i += 2;
    else i += 1;

    if (len >= count) return res;
  }
  return res;
}

/**
 * @description 去除字符串前后空格，包括零宽字符
 * @param {*} str
 * @returns
 */
export const cusTrim = (str: string) => {
  return str?.trim?.().replace(/[\u200B-\u200D]/g, "") || str || "";
};

/**
 * @description 读取cookie
 * @param name 关键字
 * @returns
 */
export function getCookie(name: string) {
  const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  const result = document.cookie.match(reg);

  return result ? result[2] : "";
}

/**
 * @description 删除cookie
 * @param name cookie关键字
 * @param domain cookie域名
 * @param path cookie地址
 */
export function delCookie(name: string, domain?: string, path?: string) {
  // @ts-ignore
  document.cookie = `${name}=;expires=${new Date(0).toGMTString()}${
    domain ? `;domain=${domain}` : ""
  }${path ? `;path=${path}` : ""}`;
}

// 当model为数组时，生成特殊key
export function getSpecialKey(model: string[]): string {
  return `_searchKey_${model.join("&")}`;
}

// 根据上面的生成特殊key的方法（getSpecialKey），定义对应的验证方法
export function isSpecialKey(key: string) {
  return /^_searchKey_.+/.test(key);
}

function createInput(accept = "", multiple = false) {
  const input = document.createElement("input");
  input.type = "file";

  accept && (input.accept = accept);
  multiple && (input.multiple = "multiple");

  return input;
}

/**
 * @description 单文件选择
 * @param accept 文件类型
 * @param size 文件大小
 * @returns
 */
export function selectFile(accept = "", size = 10) {
  return new Promise((resolve, reject) => {
    const input = createInput(accept);
    input.onchange = function onchange(event) {
      this.onchange = null;
      const file = event.target?.files[0];
      if (size > 0 && file.size / 1024 / 1024 > size) {
        message.error(`上传文件不能超过${size}M`);
        reject();
      } else {
        resolve(file);
      }
    };
    input.click();
  });
}

/**
 * @description 文件下载
 * @param res blob响应数据
 */
export function downloadFile(res: any) {
  const blob = new Blob([res.data], {
    type: res.headers["content-type"],
    // type: 'application/xlsx;charset=utf-8'
  });
  let fileName = res.headers["content-disposition"].split(";")[1];
  fileName = decodeURI(fileName).substring(10);
  const link = document.createElement("a");
  link.download = fileName; // 这里是后端返回的文件名称
  link.style.display = "none";
  link.href = URL.createObjectURL(blob);
  // 触发点击
  document.body.appendChild(link);
  link.click();
  // 释放URL对象
  URL.revokeObjectURL(link.href);
  // 然后移除
  document.body.removeChild(link);
}

/** 检查blob数据是否有效 */
export function checkBlob(res: any) {
  if (res.data.type === "application/json") {
    const reader = new FileReader();
    reader.readAsText(res.data, "utf-8");
    reader.onload = () => {
      try {
        const { firstError } = JSON.parse(reader.result + "" || "");
        message.error(firstError || "下载失败");
      } catch (e) {
        console.error(e);
        message.error("下载失败");
      }
    };
    return false;
  }
  return true;
}

/**
 * @description 为数字添加千分位分隔符
 * @param num 数字
 * @returns
 */
export const formatDigit = (num = "") => {
  num = num?.toString() || "";
  let reg = num.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
  return num.replace(reg, "$1,");
};

/**
 * @description 生成一个[start,end)区间连续的整数数组
 * @param start
 * @param end
 * @returns
 */
export const range = (start: number, end: number) => {
  const result = [];
  for (let i: number = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

export default {
  isArr,
  isFunc,
  isObj,
  isNum,
  isStr,
  isBool,
  isDef,
  isNull,
  isNaN,
  isEmpty,
  getQueryString,
  getUuid,
  getRandomItemByArray,
  shuffle,
  sleep,
  arrayToMap,
  neverFail,
  random,
  randomInt,
  checkPhone,
  strlen,
  sliceStr,
  cusTrim,
  getCookie,
  delCookie,
  getSpecialKey,
  isSpecialKey,
  createInput,
  selectFile,
  downloadFile,
  checkBlob,
  formatDigit,
  range,
};
