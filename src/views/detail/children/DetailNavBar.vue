<template>
  <nav-bar class="detail-nav">
    <span class="back-home" slot="left" @click="backToHome"></span>
    <div class="nav-title" slot="center">
      <span v-for="(item, index) in navTitle" :key="index" @click="navClick(index)" :class="{active: index === currentIndex}">{{item}}</span>
    </div>
    <img class="go-to-cart" slot="right" src="~assets/img/detail/cart.png" @click="goToCart" />
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        navTitle: ['商品', '评论', '参数', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backToHome() {
        this.$router.go(-1)
      },
      navClick(index) {
        this.currentIndex = index;
        this.$emit('nav-click', index)
      },
      goToCart() {
        this.$router.replace('/cart');
      }
    }
  }
</script>

<style scoped>
  .back-home {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin-top: 8px;
    background: url('~assets/img/detail/back.png') 0 0/28px 28px no-repeat;
  }

  .nav-title {
    display: flex;
    justify-content: space-evenly;
  }

  .active {
    color: var(--color-highlight-text);
  }

  .go-to-cart {
    width: 22px;
    height: 22px;
    margin-top: 10px;
  }
</style>
