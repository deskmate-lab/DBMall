<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" />
    <fashion-view />
    <!-- 父组件内部的子组件标签上监听自定义事件，且不能写参数 -->
    <tab-control :titles="titles" @tab-click="tabClick" />
    <goods-list :goods="goodsInfo" />
  </div>
</template>

<script>
  import HomeSwiper from './children/HomeSwiper'
  import RecommendView from './children/RecommendView'
  import FashionView from './children/FashionView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'

  import {getMultidata, getGoodsList} from 'network/home'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FashionView,
      NavBar,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banner: [],
        recommend: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          pop: {page: 1, list: []},
          new: {page: 1, list: []},
          sell: {page: 1, list: []}
        },
        currentType: 'pop'
      }
    },
    computed: {
      goodsInfo() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 请求轮播图数据
      this.getMultidata();
      
      // 请求首页展示的商品列表数据
      this.getGoodsList('pop');
      this.getGoodsList('new');
      this.getGoodsList('sell');
    },
    methods: {
      // 网络请求方法
      getMultidata() {
        getMultidata().then(result => {
          this.banner = result.data.banner.list;
          this.recommend = result.data.recommend.list;
        });
      },
      getGoodsList(type) {
        getGoodsList(type, this.goods[type].page).then(result => {
          this.goods[type].list.push(...result.data.list);
          this.goods[type].page++;
        });
      },

      // 事件监听方法
      tabClick(index) {
        switch(index) {
          case 0: 
            this.currentType = 'pop';
            break;
          case 1: 
            this.currentType = 'new';
            break;
          case 2: 
            this.currentType = 'sell';
            break;
        }
      }
    }
  };
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  
</style>
