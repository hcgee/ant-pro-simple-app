/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

import { filterMenu } from "./utils/utils";

export default function access(initialState: { currentUser?: API.CurrentUser, currentMenu?: API.CurrentUser } | undefined) {
  const { currentUser, currentMenu = [] } = initialState ?? {};
  console.log(currentMenu, 'access');
  const hasRoutes = filterMenu(currentMenu) || []
  console.log(hasRoutes, 'hasRoutes');

  return {
    canShow: (route) => hasRoutes.includes(route.path), // initialState 中包含了的路由才有权限访问
  };
}
