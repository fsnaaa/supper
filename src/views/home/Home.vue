<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <span slot="center">购物商城</span>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />

    <tab-control :titles="['流行', '新款', '精选']" @tabItemIndex="tabItemClick"/>
    <goods-list :goodsItem="getGoodsList" />
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
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComp/HomeSwiper";
import HomeRecommend from "./childComp/HomeRecommend";
import HomeFeature from "./childComp/HomeFeature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import { getHomeMultiData, getHomeGoodsInfo } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
  },
  created() {
    this.getHomeMultiData();

    this.getHomeGoodsInfo("pop");
    this.getHomeGoodsInfo("new");
    this.getHomeGoodsInfo("sell");
  },
  computed: {
    getGoodsList() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    tabItemClick(index){
      switch(index){
        case 0:
          this.currentType="pop";
          break;
        case 1:
          this.currentType="new";
          break;
        case 2:
          this.currentType="sell";
          break;
      }
    },
    //获取轮播图、推荐数据
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //根据类别加载商品数据
    getHomeGoodsInfo(type) {
      //获取页码
      let pageNum = this.goods[type].page;
      //根据页码和类别进行网络请求
      getHomeGoodsInfo(type, pageNum).then((res) => {
        //将获取的数据保存 修改对应类型商品数据
        //console.log(res);
        this.goods[type].list.push(...res.data.list) ;
        //下次请求 页码加一
        this.goods[type].page++;
      });
    },
  },
};
</script>

<style scoped>
.home-nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
</style>
