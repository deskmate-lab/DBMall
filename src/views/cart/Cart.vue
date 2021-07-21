<template>
  <div>
    <nav-bar class="cart-nav">
      <!-- 3.直接使用解构后的computed属性 -->
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CartList from './children/CartList'
  import CartBottom from './children/CartBottom'

  // 1.导入mapGetters
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottom
    },
    computed: {
      // 2.将store对象的getters解构为组件的computed属性
      // 两种写法
      // 1) 数组写法
      // ...mapGetters(['cartListLength'])
      // 2) 对象写法并重命名
      ...mapGetters({
        length: 'cartListLength'
      })
    },
    activated() {
      // Cart组件每次处于活跃状态则重新计算scrollerHeight
      this.$refs.scroll.bs.refresh()
    }
  }
</script>

<style scoped>
  .cart-nav {
    color: #fff;
    background-color: var(--color-tint);
  }

  .wrapper {
    height: calc(100vh - 137px);
    overflow: hidden;
  }
</style>
