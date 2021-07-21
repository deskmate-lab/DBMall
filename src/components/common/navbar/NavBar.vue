<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 5px 10px rgba(150, 150, 150, .12);
  }

  .nav-bar .left, .right {
    width: 60px;
    text-align: center;
  }

  .nav-bar .center {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
</style>
