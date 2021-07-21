<template>
  <div class="bottom-bar">
    <span class="select-all">
      <img src="~assets/img/cart/selected.png">&nbsp;全选
    </span>
    <span class="total">合计:￥{{totalPrice}}元</span>
    <span class="pay">去付款({{totalCount}})</span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'CartBottom',
    computed: {
      ...mapGetters(['totalCount', 'totalPrice'])
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
  }

  .select-all {
    flex: 26% 0 0;
    color: #999;
  }

  .select-all img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .total {
    flex: 1;
    color: #333;
    font-size: 16px;
  }

  .pay {
    flex: 0 0 30%;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
  }
</style>
