<template>
  <div class="tab-bar">
    <!-- 这个插槽放tabbaritem小组件
          Maintabbar（App.vue)可见 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.tab-bar {
  display: flex;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.08);
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 49px;
  right: 0px;
  background-color: #f6f6f6;
  text-align: center;
}
</style>
