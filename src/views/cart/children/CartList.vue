<template>
  <ul class="cart-list">
    <li v-for="(item, index) in $store.state.cartList" :key="index">
      <span class="select"></span>
      <div class="item-image">
        <img :src="item.image" />
      </div>
      <div class="item-content">
        <h3 class="title">{{item.title}}</h3>
        <p class="desc">{{item.desc}}</p>
        <span class="price">￥{{item.price}}</span>
        <span class="count">×{{item.count}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CartList'
  }
</script>

<style scoped>
  .cart-list li {
    padding: 10px;
    border-bottom: 1px solid rgb(150, 150, 150, .3);
  }

  .select {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 40px;
    background: url('~assets/img/cart/selected.png') 0 0/100% 100%;
  }

  .item-image {
    float: left;
    width: 80px;
    height: 100px;
    margin: 0 8px;
    border-radius: 4px;
    overflow: hidden;
  }

  .item-image img {
    width: 100%;
  }

  .title {
    font-weight: 400;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    
    overflow: hidden;
    text-overflow: ellipsis;
    /* 对象作为伸缩盒子模型显示 */
    display: -webkit-box;
    /* 显示的行数 */
    -webkit-line-clamp: 2;
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-box-orient: vertical;
  }

  .desc {
    /* 文本强制一行显示 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin: 6px 0 10px;
  }

  .price {
    color: var(--color-highlight-text);
    font-size: 18px;
  }

  .count {
    float: right;
    margin-right: 10px;
    color: #333;
    font-size: 18px;
  }
</style>
