/*
 * @Author: chengchunlin
 * @Date: 2024-01-08 16:40:00
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-07-03 19:14:49
 * @FilePath: /个人项目/src/stores/menusInfo.ts
 * @Description: 侧边栏 特殊属性相关数据
 *
 * Copyright (c) 2024 by 程春霖, All Rights Reserved.
 */
import { defineStore } from "pinia";
import { ref, type Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { useRoute, useRouter } from "vue-router";
// import { PartitionOutlined } from '@ant-design/icons-vue';

export const useMenusStore = defineStore("menusStore", () => {
  const route = useRoute(); // 当前路由
  const router = useRouter(); // 路由

  // 左侧菜单列表
  const menus = ref<any[]>([]);
  const setMenus = (list: RouteRecordRaw[]) => {
    menus.value = list;
  };

  const menusTitle = ref(""); // 大标题
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
      },
    })
  );

  return {
    redDotMap,
    setMenus,
    menus,
    menusTitle,
  };
});
