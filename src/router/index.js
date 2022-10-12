//导入资源包
import Vue from "vue";
import VueRouter from "vue-router";

//注册
Vue.use(VueRouter);

//导入组件
const Detail = () => import("views/detail/Detail.vue");
const Home =()=>import('views/home/Home.vue');
const Category =()=>import('views/category/Category.vue');
const Cart =()=>import('views/cart/Cart.vue');
const Me =()=>import('views/me/Me.vue');

//定义路由
const routes=[
    {
        path:'/',
        redirect: "/home",
    },
    {
        path:'/home',
        component: Home,
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/me',
        component:Me
    },
    {
        path:'/detail',
        component:Detail  
    }
];

//实例化一个路由对象
const router = new VueRouter({
    routes,
    mode: "history",
  });
  
  //导出对象
  export default router;

