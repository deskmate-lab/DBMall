<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'Scroll',
    mounted() {
      const bs = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true
      });
    }
  }
</script>

<style scoped>
  
</style>
