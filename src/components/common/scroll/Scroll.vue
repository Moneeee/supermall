<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);
BScroll.use(Pullup);
export default {
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  //组件创建完后调用，挂载了模板
  mounted() {
    /* wrapper设置高，背景颜色，控制的是wrapper的滑动。content只是内容撑开高度*/
    this.scroll = new BScroll(this.$refs.wrapper, {  
      click:true,/* 想监听DIV的点击，必须改为TRUE  TAB */
      probeType: this.probeType /* 监听滚动写这个属性     （0，1不侦测；2，手指滚动过程侦测，惯性不侦测；） */,
      observeDOM: true, /* 滑动新版加这个 */
       pullUpLoad: this.pullUpLoad,
       observeDOMImage:true,
    });
    this.scroll.scrollTo(0,0)/* 回到顶部， */
    this.scroll.on("scroll",(position)=>{/* 监听滚动位置 */
      // console.log(position);
    this.$emit('scroll',position)
   }),
   console.log(this.scroll);
    this.scroll.on("pullingUp", () => {
       console.log("pullingUp");
       this.$emit('pullingUp')
    })


  },
  methods:{
    scrollTo(x,y,time=300){ /* 回到顶部封装函数 */
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh();
    }
  },
 
  components: {},
};
</script>

<style scoped>
</style>
