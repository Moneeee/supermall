<template>
<!-- 大的ul -->
  <swiper>
    <!-- 小的图片框，预留了插槽，此处放入内容，所有图片轮播 -->
    <swiper-item v-for="(item, id) in banners" :key="id">
      <!-- 可以点击的图片 -->
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
