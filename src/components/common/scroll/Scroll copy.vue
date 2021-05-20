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
  data() {
    return {
      scroll: null,
    };
  },
  //组件创建完后调用，挂载了模板
  mounted() {
    /* wrapper设置高，背景颜色，控制的是wrapper的滑动。content只是内容撑开高度*/
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 2 /* 监听滚动写这个属性     （0，1不侦测；2，手指滚动过程侦测，惯性不侦测；） */,
      pullUpLoad: true /* 开启上拉加载更多    写这个属性 */,
       observeDOM: true,
     
    });
    this.scroll.on("scroll", (position) => {
      /* 监听滚动位置： scroll事件，参数position*/
      console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      /* 上拉加载更多：pullingup事件，无参， */
      console.log("上拉加载更多");
      //  setTimeout(() => {
      //       this.scroll.finishPullUp(); /* 执行这个，代表之前的上拉加载做完，才让你进行下一步上拉加载更多 */
      //  }, 1000);
    });
  },
   beforeDestroy() {
      this.scroll.destroy()
    },
  components: {},
};
</script>

<style scoped>
</style>
