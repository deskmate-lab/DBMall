<template>
  <div class="bottom-bar">
    <div class="bottom-item">
      <div class="item-icon service"></div>
      <span>客服</span>
    </div>
    <div class="bottom-item">
      <div class="item-icon shop"></div>
      <span>店铺</span>
    </div>
    <div class="bottom-item">
      <div class="item-icon collect" @click="collectGoods" :class="{collected: isCollected}"></div>
      <span>收藏</span>
    </div>
    <div class="add-cart" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data() {
      return {
        isCollected: false
      }
    },
    methods: {
      collectGoods() {
        this.isCollected = !this.isCollected;
      },
      addToCart() {
        this.$emit('add-to-cart')
      }
    }
}
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    box-shadow: 0 -3px 10px rgba(150, 150, 150, 0.1);
    display: flex;
    text-align: center;
  }

  .bottom-item {
    flex: 1;
    /* margin-top: 2px; */
  }

  .item-icon {
    width: 24px;
    height: 24px;

    /* div水平居中 */
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 4px;
    margin-bottom: 2px;

    background-image: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .service {
    background-position: 0 -57px;
  }

  .shop {
    background-position: 0 -107px;
  }

  .collect {
    background-position: 0 1px;
  }

  .collected {
    background-position: 0 -28px;
  }

  .add-cart,
  .buy {
    /* 固定右边两栏的宽度，左边自适应 */
    flex: 0 0 26%;
    line-height: 49px;
    font-size: 16px;
  }

  .add-cart {
    color: #333;
    background-color: #ffe817;
  }

  .buy {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
