<template>
  <div id="app">
    <!-- router占位 -->
    <router-view/>
    <!-- 底部bar -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// 引入底部bar,底部bar
import MainTabBar from '@/components/content/maintabbar/MainTabBar'
export default {
  name: 'App',
  data(){
    return {}
  },
  components: { 
    // 注册组件
    MainTabBar,
  }
}
</script>

<style>
/* css引入这样写 */
 @import "assets/css/base.css";
</style>
