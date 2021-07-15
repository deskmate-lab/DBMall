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
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        bs: null
      }
    },
    mounted() {
      this.bs = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      });
      this.bs.on('scroll', pos => {
        this.$emit('show-back-top', pos)
      })
    }
  }
</script>

<style scoped>
  
</style>
