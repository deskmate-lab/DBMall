<template>
  <div id="detail">
    <detail-nav-bar @nav-click="navClick" ref="nav" />
    <scroll class="wrapper"
            ref="scroll"
            @get-position="getPosition"
            :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :base-info="baseInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-comment :comment-info="commentInfo" ref="comment" />
      <detail-detail-info :detail-info="detailInfo" @img-load="imgLoad" ref="params" />
      <detail-params :params-info="paramsInfo" />
      <detail-recommend :recommend-info="recommendInfo" ref="recommend" />
    </scroll>
    <back-top @click.native="backToTop" v-show="isShowBackTop" />
    <detail-bottom-bar />
  </div>
</template>

<script>
  import DetailNavBar from './children/DetailNavBar'
  import DetailSwiper from './children/DetailSwiper'
  import DetailBaseInfo from './children/DetailBaseInfo'
  import DetailShopInfo from './children/DetailShopInfo'
  import DetailComment from './children/DetailComment'
  import DetailDetailInfo from './children/DetailDetailInfo'
  import DetailParams from './children/DetailParams'
  import DetailRecommend from './children/DetailRecommend'
  import DetailBottomBar from './children/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'

  import {getDetailData, getRecommend, BaseInfo, ShopInfo, ParamsInfo} from 'network/detail'
  import {debounce} from 'common/utils'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailDetailInfo,
      DetailComment,
      DetailParams,
      DetailRecommend,
      Scroll,
      BackTop,
      DetailBottomBar
    },
    data() {
      return {
        topImages: [],
        baseInfo: {},
        shopInfo: {},
        detailInfo: {},
        paramsInfo: {},
        // commentInfo数据尚未请求过来时，子组件的props默认为{}，此时子组件模板渲染时根本读取不到commentInfo.user
        commentInfo: {
          list: [
            {
              user: {}
            }
          ]
        },
        recommendInfo: [],
        offsetTop: [0],
        getOffsetTop: null,
        isShowBackTop: false
      }
    },
    created() {
      this._getDetailData()
      this._getRecommend()
      // 获取offsetTop并防抖
      this.getOffsetTop = debounce(() => {
        this.offsetTop = [0]
        this.offsetTop.push(this.$refs.comment.$el.offsetTop)
        this.offsetTop.push(this.$refs.params.$el.offsetTop)
        this.offsetTop.push(this.$refs.recommend.$el.offsetTop)
        this.offsetTop.push(Number.MAX_VALUE)
      }, 100)
    },
    methods: {
      // DetailDetailInfo的所有图片加载完毕调用一次
      imgLoad() {
        this.$refs.scroll.bs.refresh()
        this.getOffsetTop()
      },
      navClick(index) {
        this.$refs.scroll.bs.scrollTo(0, -this.offsetTop[index], 200)
      },
      getPosition(pos) {
        // for...in遍历数组时，index为String类型
        for(let i = 0; i < this.offsetTop.length - 1; i++) {
          if(-pos.y >= this.offsetTop[i] && -pos.y <= this.offsetTop[i+1]) {
            this.$refs.nav.currentIndex = i;
          }
        }
        // backTop的显示和隐藏
        this.isShowBackTop = pos.y < -2000;
      },
      backToTop() {
        this.$refs.scroll.bs.scrollTo(0, 0, 500)
      },

      _getDetailData() {
        getDetailData(this.$route.params.iid).then(result => {
          const res = result.result;
          console.log(res);
          // 保存轮播图图片
          this.topImages = res.itemInfo.topImages;
          // 通过创建类的实例来保存商品标题、价格、销量等基本信息
          this.baseInfo = new BaseInfo(res.itemInfo, res.columns, res.shopInfo.services);
          // 通过创建类的实例来保存店铺信息
          this.shopInfo = new ShopInfo(res.shopInfo);
          // 保存商品详情数据
          this.detailInfo = res.detailInfo;
          // 保存商品参数信息
          this.paramsInfo = new ParamsInfo(res.itemParams);
          // 保存用户评论数据
          if(res.rate.cRate !== 0) {
            this.commentInfo = res.rate;
          }
        })
      },
      _getRecommend() {
        getRecommend().then(result => {
          this.recommendInfo = result.data.list;
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    /* 只有有定位的元素才能设置z-index */
    position: relative;
    z-index: 8;
    /* 盖住底部的tabbar */
    background-color: #fff;
    /* #detail必须指定高度才能使用定位撑开.wrapper */
    height: 100vh;
  }

  .wrapper {
    overflow: hidden;
    height: calc(100vh - 93px);

    /* position: absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0; */
  }
</style>
