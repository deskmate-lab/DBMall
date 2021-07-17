<template>
  <nav-bar class="detail-nav">
    <img slot="left" src="~assets/img/common/back.png" alt="">
    <div slot="center">
      <span v-for="(item, index) in navTitles" :key="index">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNav',
    components: {
      NavBar
    },
    data() {
      return {
        navTitles: ['商品', '参数', '评论', '推荐']
      }
    }
  }
</script>

<style scoped>
  .detail-nav img {
    width: 28px;
    height: 28px;
    margin: 8px 14px;
  }

  .detail-nav div {
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
  }
</style>
