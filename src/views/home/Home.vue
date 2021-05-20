<template>
  <!-- 唯一的，可用ID -->
  <div id="home">
    <!-- navbar定义了三个插槽，见navbar,home中navbar，插槽center中放购物街 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar
    ><!-- 导航bar -->=
    <Scroll class="content" ref="scroll" :probe-type="3" 
            @scroll="contentScroll"  :pull-up-load="true" @pullingUp="loadMore"><!-- 不加冒号，传的字符串 -->
    <home-swiper :banners="banners" /><!-- 轮播 -->
    <recommend-view :recommends="recommends"></recommend-view
    ><!--推荐 -->
    <feature-view></feature-view>
    <tab-control  class="tab-control"  :titles="['流行', '新款', '精选']"  @TabClick="TabClick"
    ></tab-control>
    <!-- good的pop类型数据传给goodslist页面,goodlist想用用goods -->
    <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
    <!-- 不加冒号，只能传字符串 -->
    <ul style="height: 200px"></ul>
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper"; //引入首页轮播图
import RecommendView from "views/home/childComps/RecommendView.vue"; //引入推荐
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "@/components/common/navbar/NavBar"; //引入导航bar
import TabControl from "components/content/tabControl/TabControl.vue"; //引入三大流行tab
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from '@/components/content/backTop/BackTop';

import { getHomeMultidata, getHomeGoods } from "network/home.js"; //引入调接口方法

export default {
  name: "Home",
  data() {
    return {
      /* 接收接口返回的数据 */
      banners: [],
      recommends: [],
      /* 同时接收三个接口数据 */
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
      },
     currentType:'pop',
     isShowBackTop:false
    };
  },
  computed:{
    showGoods() {
      return this.goods[this.currentType].list
    }
  
  },
  //生命周期函数，创建组件触发
  // 只写主要逻辑，方法在methods
  created() {
    /* home接口数据，banner，推荐 */
    this.getHomeMultidata();
    /* home三大流行推荐，封装调接口方法，具体方法在methods，
    此处，调的是方法里的接口封装名字。methods里调接口具体方法 */
    this.getHomeGoods("pop"); /* 执行的是方法里的掉接口方法，传参过去 */
    this.getHomeGoods("sell");
    this.getHomeGoods("new");

    /* 时间总线监听item图片加载完成 */
     this.$bus.$on("ItemImageLoad",()=>{
      this.$refs.scroll.refresh()
     })
  },
 
  methods: {
     TabClick(index){
       switch (index) {
         case 0:
           this.currentType='pop'
           break;
         case 1:
            this.currentType='new'
             break;      
        case 2:
            this.currentType='sell'
        break;  
      } 
     },
     backClick(){
      //  this.$refs.scroll.scroll.scrollTo(0,0)
          this.$refs.scroll.scrollTo(0,0,500)/* 拿到scroll的scrollTo方法，回到顶部 */
     },
     contentScroll(position){
       this.isShowBackTop=(-position.y)>1000/* 大于1000，图标出现 */
      
     },
     loadMore(){
       this.getHomeGoods(this.currentType)/* 加载更多拿数据方法 */
     },
   
    /* 
       网络请求
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        //this当前组件对象
        // this.result=res;

        // list中才是数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 为了布局，封装了一层，生命周期函数写逻辑，
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      /* 不写死，为了复用，pop,1 
      page,拿定义接收接口数据的变量，加1,还是第一页数据
      type，形参，实参传递方式*/
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        //...相当于把数组解析，一个个得push到goods数组里。
        this.goods[type].list.push(...res.data.list);
        //取完第一页数据，page要加1
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp() /* 代表之前的上拉加载做完，才让你进行下一步上拉加载更多 */
      });
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
};
</script>

<style scoped>


.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky; /* 移动到某位置变static */
  top: 44px;
  z-index: 9999;
}

.content{
 
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left:0px;
  right:0px; 
} 
</style>
