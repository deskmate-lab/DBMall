<template>
  <div class="bottom-bar">
    <span class="check-all">
      <check-button class="check-all-button"
      :is-checked="isAllChecked"
      @click.native="toggleAllChecked" />
      <span>全选</span>
    </span>

    <span class="total">合计:￥{{totalPrice}}元</span>

    <span class="pay">去付款({{totalCount}}件)</span>
  </div>
</template>

<script>
  import CheckButton from 'components/common/checkbutton/CheckButton'

  import {mapGetters} from 'vuex'

  export default {
    name: 'CartBottom',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['totalPrice', 'totalCount']),

      isAllChecked() {
        // 如果购物车不为空
        if(this.$store.state.cartList.length) {
          // 存在1个没选中
          return !this.$store.state.cartList.some(item => item.checked === false)
        }
        // 如果购物车为空，本计算属性值为undefined，check-button默认不选中
      }
    },
    methods: {
      toggleAllChecked() {
        if(this.$store.state.cartList.length) {
          this.$store.commit('toggleAllChecked', !this.isAllChecked)
        } else {
          alert('您的购物车为空');
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 44px;
    line-height: 44px;
    background-color: #f8f8f8;
    position: relative;
    z-index: 9;
    display: flex;
  }

  .check-all {
    flex: 24% 0 0;
    color: #999;
    
    /* 居中对齐弹性盒的各项<div>元素 */
    display: flex;
    align-items: center
  }

  .check-all-button {
    margin-left: 24px;
    margin-right: 4px;
  }

  .total {
    flex: 1;
    color: #333;
    font-size: 16px;
    text-align: center;
  }

  .pay {
    flex: 0 0 33%;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
</style>
