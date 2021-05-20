<template>
<!-- tab-bar-item封装的小组件，三个插槽，图片，活跃状态图片，文字。
     div包插槽，防止出错。
     通过v-if，v-else,isActive状态切换颜色；
     通过:style isActive设置用户传来的样式值 -->
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    //页面传来的path
    path: String, 
    //页面传来的active颜色
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true,
      // path:'../views/cart/Cart'
    };
  },
  computed: {
    isActive() {  
       //  路由活跃的路径和页面传来的路径是否一样，一样为true.
      return this.$route.path.indexOf(this.path)!==-1;
    },

    activeStyle(){
      // 当前是活跃状态，则颜色为页面传来的，否则不变。
      return  this.isActive?{color:this.activeColor}:{}
    }
  },
  components: {},
  methods: {
    ItemClick() {
      console.log(this.path);
      //代码跳转路径，路径为页面传来的
      return this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: red;
} */
</style>
