<template>
<!-- tabbar一个插槽，tabbar可见，插槽放tabbaritem，此页面可见,
     tabbaritem三个插槽，tabbaritem可见，插槽放图片文字，此页面可见
     path传值路径，不加：,不是动态获取，是自定义传值
     activeColor传值active状态的颜色
     dom里引用~ -->
    <tab-bar>
     <tab-bar-item path='/home' activeColor="#ff5777">        
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="item-text">首页</div>
     </tab-bar-item>
    <tab-bar-item path='/category' activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
      
   </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
 
  data() {
    return {

    }
  },
  components: {
   TabBar,
   TabBarItem
  }
}
</script>

<style>
</style>
