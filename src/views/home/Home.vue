<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <home-recommend-view :recommend="recommend" />
    <home-fashion-view />

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './children/HomeSwiper'
  import HomeRecommendView from './children/HomeRecommendView'
  import HomeFashionView from './children/HomeFashionView'

  import {getMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFashionView
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
  #home {
    padding-top: 44px;
    height: 1200px;
  }

  #home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
