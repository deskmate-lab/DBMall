<template>
  <nav-bar class="detail-nav">
    <span class="back-home" slot="left" @click="backToHome"></span>
    <div slot="center">
      <span v-for="(item, index) in navTitles" :key="index" @click="navClick(index)" :class="{active: index === currentIndex}">{{item}}</span>
    </div>
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
        navTitles: ['商品', '评论', '参数', '推荐'],
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
      }
    }
  }
</script>

<style scoped>
  .back-home {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 8px 14px;
    background: url('~assets/img/detail/back.png') 0 0/28px 28px no-repeat;
  }

  .detail-nav div {
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
  }

  .active {
    color: var(--color-highlight-text);
  }
</style>
