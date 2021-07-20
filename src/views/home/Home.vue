<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control-copy" ref="tabControlCopy" :titles="titles" @tab-click="tabClick" v-show="isTabControlFixed" />
    <!-- 通过绑定probeType属性决定是否实时监听Scroll组件的滚动 -->
    <scroll class="wrapper"
            @get-position="getPosition"
            :probe-type="3"
            :pull-up-load="true"
            ref="scroll"
            @pulling-up="pullingUp">
      <home-swiper :banner="banner" @swiper-img-load="swiperImgLoad" />
      <recommend-view :recommend="recommend" />
      <fashion-view />
      <!-- 父组件内部的子组件标签上监听自定义事件，且不能写参数 -->
      <tab-control ref="tabControl" :titles="titles" @tab-click="tabClick" />
      <goods-list :goods="goodsInfo" />
    </scroll>
    <!-- 注：组件原生事件如click是不能直接监听的，必须添加native修饰符才能直接监听 -->
    <back-top @click.native="backToTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import HomeSwiper from './children/HomeSwiper'
  import RecommendView from './children/RecommendView'
  import FashionView from './children/FashionView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'

  import {getMultidata, getGoodsList} from 'network/home'
  import {debounce} from 'common/utils'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FashionView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop    
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
        currentType: 'pop',
        isShowBackTop: false,
        isTabControlFixed: false,
        tabControlOffsetTop: 0,
        lastY: 0,
        itemImgLoadListener: null
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
    mounted() {
      // 在mounted钩子内部才能通过$refs取到DOM元素
      // 'item-img-load'事件会被频繁触发，由此this.$refs.scroll.bs.refresh()会被频繁调用，因此需要防抖(即只要每个delay时间间隔以内DOM发生了改变就不会触发refresh，DOM结构超过delay时长不改变即触发refresh，所有item加载完毕等待delay时长以后必然会触发一次refresh)
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.itemImgLoadListener = () => {
        refresh()
      }
      this.$bus.$on('item-img-load', this.itemImgLoadListener)
    },
    // keep-alive包裹的组件提供activiated()和deactiviated()两个钩子
    activated() {
      this.$refs.scroll.bs.scrollTo(0, this.lastY, 0)
      // 防止出现回到Home不能滚动的情况
      this.$refs.scroll.bs.refresh()
    },
    // 导航离开Home组件路由时调用，可以访问组件实例的this
    beforeRouteLeave(to, from, next) {
      this.lastY = this.$refs.scroll.bs.y;
      // 取消Home对事件总线的监听
      // this.$bus.$off('item-img-load', this.itemImgLoadListener)
      next()
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
        // 使两个tabControl当前活跃的currentIndex始终保持一致
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControlCopy.currentIndex = index;
      },
      backToTop() {
        // 调用Scroll组件内部的scrollTo方法
        this.$refs.scroll.bs.scrollTo(0, 0, 500)
      },
      getPosition(pos) {
        // backTop的显示和隐藏
        this.isShowBackTop = pos.y < -1000;
        // tabControl的固定定位
        this.isTabControlFixed = -pos.y > this.tabControlOffsetTop
      },
      pullingUp() {
        // 请求下一页数据
        this.getGoodsList(this.currentType)
      },
      swiperImgLoad() {
        // 获取tabControl的offsetTop，组件是不存在offsetTop属性的，必须通过组件的$el获取组件对应的DOM元素
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }
    }
  };
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    /* #home必须指定高度才能使用定位撑开.wrapper */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 使用better-scroll确定了滚动的wrapper和content，无论如何nav都不可能滚动，因此不再需要固定定位 */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }

  .tab-control-copy {
    /* 只有有定位的元素才能设置z-index */
    position: relative;
    z-index: 9;
  }

  .wrapper {
    overflow: hidden;

    /* #home或者.wrapper必须设置高度 */
    /* 通过top、bottom撑开.wrapper */
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
  }

</style>
