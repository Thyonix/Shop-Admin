import { createWebHistory, createRouter } from 'vue-router'

import NotFount from '../views/error/404.vue'
import Login from '../views/auth/loginAndRegister.vue'
import Home from '../views/index.vue'
// import Layout from '../Layout/index.vue'
// import GoodsList from '../views/goods/list.vue'
// import CategoryList from '../views/category/list.vue'
// import ImageList from '../views/image/list.vue'

// 公共路由
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFount',
    component: NotFount,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  }
//   {
//     path: '/',
//     name: 'Layout',
//     component: Layout,
//   }
]

// 动态路由
export const asyncRoutes = [
//   {
//     path: "/",
//     name: "/",
//     component: Home,
//     meta: {
//       title: "后台首页"
//     }
//   }, 
//   {
//     path: "/goods/list",
//     name: "/goods/list",
//     component: GoodsList,
//     meta: {
//       title: "商品管理"
//     }
//   }, 
//   {
//     path: "/category/list",
//     name: "/category/list",
//     component: CategoryList,
//     meta: {
//       title: "分类列表"
//     }
//   },
// {
//   path: "/user/list",
//   name: "/user/list",
//   component: UserList,
//   meta: {
//     title: "用户列表"
//   }
// }, {
//   path: "/order/list",
//   name: "/order/list",
//   component: OrderList,
//   meta: {
//     title: "订单列表"
//   }
// }, {
//   path: "/comment/list",
//   name: "/comment/list",
//   component: CommentList,
//   meta: {
//     title: "评价列表"
//   }
// }, 
// {
//   path: "/image/list",
//   name: "/image/list",
//   component: ImageList,
//   meta: {
//     title: "图库列表"
//   }
// }, 
// {
//   path: "/notice/list",
//   name: "/notice/list",
//   component: NoticeList,
//   meta: {
//     title: "公告列表"
//   }
// }, {
//   path: "/setting/base",
//   name: "/setting/base",
//   component: SettingBase,
//   meta: {
//     title: "基础配置"
//   }
// }, {
//   path: "/coupon/list",
//   name: "/coupon/list",
//   component: CouponList,
//   meta: {
//     title: "优惠券列表"
//   }
// }, {
//   path: "/manager/list",
//   name: "/manager/list",
//   component: ManagerList,
//   meta: {
//     title: "管理员列表"
//   }
// }, {
//   path: "/access/list",
//   name: "/access/list",
//   component: AccessList,
//   meta: {
//     title: "菜单权限管理"
//   }
// }, {
//   path: "/role/list",
//   name: "/role/list",
//   component: RoleList,
//   meta: {
//     title: "角色管理"
//   }
// }, {
//   path: "/skus/list",
//   name: "/skus/list",
//   component: SkusList,
//   meta: {
//     title: "规格管理"
//   }
// }, {
//   path: "/level/list",
//   name: "/level/list",
//   component: LevelList,
//   meta: {
//     title: "会员等级"
//   }
// }, {
//   path: "/setting/buy",
//   name: "/setting/buy",
//   component: SettingBuy,
//   meta: {
//     title: "交易设置"
//   }
// }, {
//   path: "/setting/ship",
//   name: "/setting/ship",
//   component: SettingShip,
//   meta: {
//     title: "物流设置"
//   }
// }, {
//   path: "/distribution/index",
//   name: "/distribution/index",
//   component: DistributionIndex,
//   meta: {
//     title: "分销员管理"
//   }
// }, {
//   path: "/distribution/setting",
//   name: "/distribution/setting",
//   component: DistributionSetting,
//   meta: {
//     title: "分销设置"
//   }
// }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router