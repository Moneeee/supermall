<template>
  <div class="goods">
      <!-- goodslist页面引用goodslistitem, goodslist页面接收home传过来的goods数据（props），
         goods可在此页面直接使用
         在将goods里的item，传递给goodslistitem页面进行小组件展示。在goodslistitem页面
         可goodsitems使用
         ：传，props接，页面使用用props的数据
       -->
    <goods-list-item
      :goodsItem="item"
      v-for="item in goods"
      :key="item.value"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodList",
  props: {
      /* home：good   传*/
      /* 此页面props，goods可在此使用  接收 */
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
