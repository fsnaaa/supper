<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
        <span slot="center">购物商城</span>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-feature/>
    <tab-control :titles="['流行','新款','精选']"/>
    <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childComp/HomeSwiper"
import HomeRecommend from "./childComp/HomeRecommend"
import HomeFeature from "./childComp/HomeFeature"
import TabControl from "components/content/tabcontrol/TabControl"

import { getHomeMultiData } from "network/home";
export default {
    data(){
        return{
            banners:[],
            recommends:[]
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        HomeFeature,
        TabControl
    },
    created(){
        this.getHomeMultiData();
    },
    methods:{
        //获取轮播图、推荐数据
        getHomeMultiData(){
            getHomeMultiData().then(res=>{
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
            })
        }
    }

}
</script>

<style scoped>
.home-nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
</style>