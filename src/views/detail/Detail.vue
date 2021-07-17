<template>
  <div>
    <detail-nav />
    <detail-swiper :topImages="topImages" />
    <detail-base-info :baseInfo="baseInfo" />
    <detail-shop-info :shopInfo="shopInfo" />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
  import DetailNav from './children/DetailNav'
  import DetailSwiper from './children/DetailSwiper'
  import DetailBaseInfo from './children/DetailBaseInfo'
  import DetailShopInfo from './children/DetailShopInfo'

  import {getDetailData, BaseInfo, ShopInfo} from 'network/detail'

  export default {
    name: 'Detail',
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    data() {
      return {
        topImages: [],
        baseInfo: {},
        shopInfo: {}
      }
    },
    created() {
      getDetailData(this.$route.params.iid).then(result => {
        const res = result.result;
        console.log(res);
        // 保存轮播图图片
        this.topImages = res.itemInfo.topImages;
        // 通过创建类的实例来保存商品标题、价格、销量等基本信息
        this.baseInfo = new BaseInfo(res.itemInfo, res.columns, res.shopInfo.services);
        // 通过创建类的实例来保存店铺信息
        this.shopInfo = new ShopInfo(res.shopInfo)
      })

    }
  }
</script>

<style scoped>
  
</style>
