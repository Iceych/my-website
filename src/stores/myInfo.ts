/*
 * @Author: chengchunlin 
 * @Date: 2023-11-13 09:31:51
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:08:27
 * @FilePath: /个人项目/src/stores/myInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
// import { getCookieToken } from '@/utils/OALogin';
interface UserInfoType {
  account: string; // 工号
  exp: number; // 过期时间
  loginTime: string; // 登录日期 YYYY-MM-DD
  userName: string; // 姓名
}

export const useMyInfoStore = defineStore('myInfoStore', () => {
  const token = ref<string>(null);
  let userInfo = reactive<UserInfoType>({
    account: '',
    exp: 0,
    loginTime: '',
    userName: ''
  });
  if (token.value) {
    userInfo = Object.assign(userInfo, jwtDecode(token.value));
  }
  const isLogin = ref(userInfo?.exp && Date.now() < userInfo.exp * 1000);

  return {
    token,
    userInfo,
    isLogin
  };
});
