<template>
  <!-- 如果shopInfo数据没有请求过来，则不予显示 -->
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <img :src="shopInfo.logo" />
    <span class="shop-name">{{shopInfo.name}}</span>
    <div class="other-info">
      <div class="left">
        <span><p>{{sales}}万</p><p>总销量</p></span>
        <span><p>{{shopInfo.goodsCount}}</p><p>全部宝贝</p></span>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'high-score': item.isBetter}">{{item.score.toFixed(2)}}</td>
            <td class="grade" :class="{'high-grade': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-enter">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      sales() {
        return (this.shopInfo.sales / 10000).toFixed(1); 
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 20px 12px;
    border-bottom: 5px solid rgb(150, 150, 150, .12);
  }

  .shop-info img {
    width: 50px;
    height: 50px;
    border: 1px solid rgb(150, 150, 150, .3);
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }

  .shop-name {
    font-size: 16px;
  }

  .other-info {
    display: flex;
    color: #333;
    margin-top: 10px;
  }

  .left, .right {
    flex: 1;
  }

  .left {
    padding: 0 5px;
    border-right: 1px solid rgb(150, 150, 150, .3);
    line-height: 2;
    text-align: center;
  }

  .left span {
    display: inline-block;
    width: 50%;
  }

  .right {
    /* 使右侧table始终居中 */
    display: flex;
    justify-content: space-around;
  }

  td {
    padding: 0 4px;
    line-height: 1.2;
  }

  .score {
    color: #329629;
  }

  .grade {
    padding: 0;
    color: #fff;
    background-color: #329629;
  }

  .high-score {
    color: #f05133;
  }

  .high-grade {
    background-color: #f13e3a;
  }

  .shop-enter {
    margin: 30px 0 20px;
    text-align: center;
  }

  .shop-enter span {
    background-color: #f1f1f1;
    border-radius: 12px;
    padding: 8px 40px;
  }
</style>
