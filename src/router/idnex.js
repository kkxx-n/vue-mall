import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Me = () => import('../views/me/Me.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes =[
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        // 指定的组件
        component:Home
      },
      {
        path: '/category',
        component:Category
      },
      {
        path: '/cart',
        component:Cart
      },
      {
        path: '/me',
        component:Me
      },
      {
        // 路由传参 为每个页面确定不同的路由 但是都是选择一样的组件
        path:'/detail/:iid',
        component:Detail
      }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router