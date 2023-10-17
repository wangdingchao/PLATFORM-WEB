import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'
import Layout from '../views/Layout.vue'
import LoginInfo from '../views/LoginInfo/index.vue'
import { useLoginStore } from '../stores/loginStore.js'
import { useMenuStore } from "../stores/menuStore.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta:{
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta:{
            requiresAuth: true,
            key: "首页"
          }
        },
        {
          path: '/infoManage',
          name: 'infoManage',
          component: () =>import("../views/InfoManage/index.vue"),
          meta:{
            requiresAuth: true,
            key: "资讯管理"
          }
        },
        {
          path: '/miniManage',
          name: 'miniManage',
          component: () =>import("../views/MiniManage/index.vue"),
          meta:{
            requiresAuth: true,
            key: "小程序管理"
          }
        },
        {
          path: '/bigScrManage',
          name: 'bigScrManage',
          component: () =>import("../views/BigScrManage/index.vue"),
          meta:{
            requiresAuth: true,
            key: "大屏管理"
          }
        },
        {
          path: '/gameManage',
          name: 'gameManage',
          component: () =>import("../views/GameManage/index.vue"),
          meta:{
            requiresAuth: true,
            key: "赛事管理"
          }
        },
        {
          path: '/userCenter',
          name: 'usercenter',
          component: () =>import("../views/UserCenter/index.vue"),
          meta:{
            requiresAuth: true,
            key: "个人中心"
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginInfo
    }
  ]
})

/**
 * 路由权限
 * 三个参数。
 * @para to：要跳到那个页面
 * @para from：从哪儿跳来的
 * @next next：允许他继续往下执行
 */

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 需要验证登录
    const loginStore = useLoginStore()
    if (!loginStore.token) {
      next({
        path: "/login"
      })
    }
     else {
      next()
    }
  }

  else {
    next();
  }

})

router.afterEach((to, from) =>{
  
  // 存储路由路径
  localStorage.setItem("active", to.path);

  if (to.meta.key) {
    // 存储 key 信息
    const menuStore = useMenuStore();
    menuStore.breadCrumb = to.meta.key;
  }
})

export default router
