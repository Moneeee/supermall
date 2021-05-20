<template>
  <div class="tabcontrol">
    <!-- 定义一个 currentIndex：0
         当当前索引跟（数组index索引）一样时，说明是active状态，给class,active
         然后通过点击事件改变当前索引，赋值给index（数组索引）-->
    <div
      class="tabcontrol-item"
      @click="ItemClick(index)"
      v-for="(item, index) in titles"
      :key="item"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: Array /*  不加引号*/,
    default() {
      return []; /* 返回数组 */
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    ItemClick(index) {
      this.currentIndex = index;
      this.$emit('TabClick',index);
    },
  },
  components: {},
};
</script>

<style>
.tabcontrol {
   display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
 
}
.tabcontrol-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
