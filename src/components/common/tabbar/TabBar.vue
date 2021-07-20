<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    justify-content: space-around;
    height: 49px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #f5f5f5;
    box-shadow: 0 -5px 10px rgba(150, 150, 150, 0.15);

    font-size: 12px;
  }
</style>
