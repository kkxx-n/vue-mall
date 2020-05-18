<template>
  <swiper>
    <swiper-item v-for="item  in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'

export default {
  props:{
      banners:{
          type:Array,
          default () {
              return []
          }
      }
  },
  components:{
      Swiper,
      SwiperItem
  }
};
</script>

<style  scoped>
</style>