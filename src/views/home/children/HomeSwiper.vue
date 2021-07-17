<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banner: {
        type: Array,
        // 如果类型限制为Array或Object，default必须是工厂函数
        default() {
          return []
        }
      }
    },
    data() {
      return {
       isSwiperImgLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImgLoad() {
        if(!this.isSwiperImgLoad) {
          this.$emit('swiper-img-load')
        }
        this.isSwiperImgLoad = true
      }
    }
  }
</script>

<style scoped>

</style>
