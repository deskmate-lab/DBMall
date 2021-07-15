<template>
  <div class="back-top">
    <img src="~assets/img/common/backTop.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 55px;
    background-color: #fff;
    border-radius: 10%;
    z-index: 100;
  }

  .back-top img {
    width: 40px;
    height: 40px;
  }
</style>
