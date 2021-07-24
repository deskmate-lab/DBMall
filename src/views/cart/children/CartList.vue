<template>
  <ul class="cart-list">
    <li v-for="(item, index) in $store.state.cartList" :key="index">
      <!-- 根据每个item的checked属性决定<check-button>是否处于选中状态 -->
        <!-- 注：直接监听组件的点击，需要使用.native修饰符！！！ -->
      <check-button class="check-button" :is-checked="item.checked" @click.native="toggle(item)" />
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
  import CheckButton from 'components/common/checkbutton/CheckButton'

  export default {
    name: 'CartList',
    components: {
      CheckButton
    },
    methods: {
      toggle(item) {
        // commit到mutations中切换checked属性
        // 必须修改model里的数据--数据驱动视图
        this.$store.commit('toggle', item)
      }
    }
  }
</script>

<style scoped>
  .cart-list li {
    padding: 10px;
    border-bottom: 1px solid rgb(150, 150, 150, .3);
  }

  .check-button {
    float: left;
    margin-top: 40px;
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
