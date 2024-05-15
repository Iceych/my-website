/*
 * @Author: chengchunlin 
 * @Date: 2024-01-08 16:40:00
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-06 17:26:07
 * @FilePath: /cfh-web/src/stores/menusInfo.ts
 * @Description: 侧边栏 特殊属性相关数据
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */
import { ref, type Component } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
// import { PartitionOutlined } from '@ant-design/icons-vue';

export const useMenusStore = defineStore('menusStore', () => {
  const route = useRoute(); // 当前路由
  const router = useRouter(); // 路由

  // 左侧菜单列表
  const menus = ref<any[]>([]);
  const setMenus = (list: RouteRecordRaw[]) => {
    menus.value = list;
  };

  const menusTitle = ref(''); // 大标题
  // 监听路由变化，切换大标题
  router.afterEach((to) => {
    const { matched } = to;
    for (let i = matched.length - 1; i > -1; i--) {
      if (matched[i].meta?.title) {
        menusTitle.value = matched[i].meta.title as string;
        break;
      }
    }
  });

  /* 以下为 红点相关逻辑 ******************************************************* */
  // 存储要显示红点的map,以路由表 name 为key
  // 多加一层代理劫持set。 1.如果已经在当前路由上了就不需要再添加红点。2.子级添加时给父级也添加红点
  const redDotMap = ref(
    new Proxy({} as Record<string, boolean | string | Component>, {
      set(target, prop, value) {
        const has = router.hasRoute(prop);
        if (has) {
          const nameList = route.matched.map((e) => e.name).filter((e) => !!e);
          if (!nameList.includes(prop) || !value) {
            target[String(prop)] = value;
            const { matched } = router.resolve({ name: prop });
            const list = matched.map((e) => e.name).filter((e) => !!e);
            if (list.length > 1) {
              redDotMap.value[String(list[list.length - 2])] = value;
            }
          }
        }
        return true;
      }
    })
  );

  // 监听路由变化，切换到相应路由时消掉红点
  // router.afterEach((to) => {
  //   const { name } = to;
  //   if (name) {
  //     redDotMap.value[String(name)] = false;
  //   }
  // });

  // TODO 待删除 测试代码，循环为redDotTest设置 红点
  // setInterval(() => {
  //   redDotMap.value['redDotTest'] = true; // 普通红点
  //   redDotMap.value['redDotTest2'] = PartitionOutlined; // 组件
  //   redDotMap.value['redDotTest3'] = '33'; // 字符
  //   redDotMap.value['redDotTest5'] = true;
  //   redDotMap.value['redDotTest6'] = true;
  // }, 5000);
  /* 以上为 红点相关逻辑 End↑↑↑End↑↑↑End↑↑↑End↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */

  return {
    redDotMap,
    setMenus,
    menus,
    menusTitle
  };
});
