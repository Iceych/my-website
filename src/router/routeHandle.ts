/*
 * @Author: chengchunlin 
 * @Date: 2024-03-06 08:24:42
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-21 09:07:49
 * @FilePath: /back-template/src/router/routeHandle.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useSysStore } from '@/stores/sysInfo';
import permissionRoutes from './permissionRoute';
import { type RouteRecordRaw } from 'vue-router';
import router from './index';
import { useMenusStore } from '@/stores/menusInfo';

export const handleRoutes = async () => {
  const { setAuthFailed } = useSysStore();
  try {
    const list = formatRouteList([]);
    getPermissionRoute(list);
  } catch (error: any) {
    setAuthFailed(error?.message || '授权失败，请稍后重试');
    return Promise.reject();
  }
};

// 将接口返回的菜单权限列表格式化-嵌套结构扁平化，内部字段根据接口动态调整
const formatRouteList = (routeList: any) => {
  if (!routeList?.length) return [];
  const authList: any[] = [];

  const catchItem = (list: any) => {
    list.forEach((item: any) => {
      const { menuid, menuname, submenus } = item;
      authList.push({
        menuid,
        menuname
      });
      if (submenus?.length) {
        catchItem(submenus);
      }
    });
  };

  catchItem(routeList);
  return authList;
};

const getPermissionRoute = (authList: any[]) => {
  // 菜单列表转对象
  const idMap = authList?.length ? $tools.arrayToMap(authList, 'menuid') : {};
  // 过滤有权限的路由
  const getValidRoutes: (
    list: RouteRecordRaw[],
    extraFilter?: (e: any) => boolean
  ) => RouteRecordRaw[] = (list, extraFilter) => {
    return list
      .filter(
        (e) =>
          ($tools.isEmpty(e.meta?.authid) || idMap[String(e.meta?.authid)]) &&
          (extraFilter ? extraFilter(e) : true)
      )
      .map(
        (e) =>
          ({
            ...e,
            children: e.children?.length ? getValidRoutes(e.children, extraFilter) : e.children
          }) as RouteRecordRaw
      );
  };

  const validRoutes = getValidRoutes(permissionRoutes);

  // 动态注入路由
  validRoutes.forEach((e) => {
    router.addRoute(e);
  });

  // 获取menus菜单数据，过滤isHide为true的路由
  const menusList = getValidRoutes(
    validRoutes.find((e) => e.name === 'root')?.children || [],
    (e) => !e.meta?.isHide
  );
  // 设置菜单
  useMenusStore().setMenus(menusList);
  useSysStore().setRouteList(authList);
};
