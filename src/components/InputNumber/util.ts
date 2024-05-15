/*
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:15:20
 * @FilePath: /个人项目/src/components/InputNumber/util.ts
 * @Description: write something
 * 
 * Copyright (c) 2024 by 程春霖, All Rights Reserved. 
 */
export const formatIntValue = (val: any, { intPlaces, max, min }: any) => {
  const t = val.charAt(0);
  val = val.replace(/[^\d]/g, "");
  if (intPlaces) {
    val = val.substring(0, intPlaces);
  }
  if (val.indexOf(".") < 0 && val !== "") {
    // 此处控制的是如果没有小数点，首位不能为类似于 01、02
    val = parseFloat(val);
  }
  if (t === "-") {
    val = "-" + val;
  }
  if (max !== undefined) {
    val = parseFloat(val) > max ? max : val;
  }
  if (min !== undefined) {
    val = parseFloat(val) < min ? min : val;
  }
  return val;
};
export const formatFloatValue = (val: any, { intPlaces, max, min, decimalPlaces }: any) => {
  const t = val.charAt(0);
  val = val.replace(/^0*(0\.|[1-9])/, "$1");
  val = val.replace(/[^\d.]/g, ""); // 清除“数字”和“.”以外的字符
  val = val.replace(/^\./g, ""); // 验证第一个字符是数字而不是.
  val = val.replace(/\.{1,}/g, "."); // 只保留第一个. 清除多余的
  val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  if (decimalPlaces) {
    // eslint-disable-next-line no-eval
    const reg = eval("/^(\\d+)\\.(\\d{" + decimalPlaces + "}).*$/");
    val = val.replace(reg, "$1.$2");
  }
  if (intPlaces) {
    val =
      val.indexOf(".") > 0
        ? val.split(".")[0].substring(0, intPlaces) + "." + val.split(".")[1]
        : val.substring(0, intPlaces);
  }
  if (val.indexOf(".") < 0 && val !== "") {
    // 此处控制的是如果没有小数点，首位不能为类似于 01、02
    val = parseFloat(val);
  }
  if (t === "-") {
    val = "-" + val;
  }
  if (max !== undefined) {
    val = parseFloat(val) > max ? max : val;
  }
  if (min !== undefined) {
    val = parseFloat(val) < min ? min : val;
  }

  return val;
};
