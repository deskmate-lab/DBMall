<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index">
      <a :href="item.link"><img :src="item.image" /></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    justify-content: space-around;

    padding: 10px 0 15px;
    border-bottom: 10px solid #eee;
    font-size: 12px;
    text-align: center;
  }

  .recommend img {
    width: 64px;
    height: 64px;
  }
</style>
