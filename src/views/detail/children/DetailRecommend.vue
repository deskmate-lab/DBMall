<template>
  <div class="recommend">
    <span class="title">为你推荐</span>
    <goods-list :goods="recommendInfo" />
  </div>
</template>

<script>
  import GoodsList from 'components/content/goodsList/GoodsList'

  export default {
    name: 'DetailRecommend',
    components: {
      GoodsList
    },
    props: {
      recommendInfo: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
    padding: 20px 12px 10px;
    color: #333;
    font-size: 16px;
  }
</style>
