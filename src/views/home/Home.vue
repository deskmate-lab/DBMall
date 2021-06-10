<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <home-recommend-view :recommend="recommend" />

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './children/HomeSwiper'
  import HomeRecommendView from './children/HomeRecommendView'

  import {getMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      getMultidata().then(result => {
        this.banner = result.data.banner.list;
        this.recommend = result.data.recommend.list;
      })
    }
  };
</script>

<style scoped>
  #home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
