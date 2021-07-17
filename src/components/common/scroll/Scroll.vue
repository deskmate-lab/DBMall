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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
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
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      this.bs.on('scroll', pos => {
        this.$emit('get-position', pos)
      })
      this.bs.on('pullingUp', () => {
        this.$emit('pulling-up')
        this.bs.finishPullUp()
      })
    },
    methods: {
      refresh() {
        // 先判断bs是否已经创建
        this.bs && this.bs.refresh()
      }
    }
  }
</script>

<style scoped>
  
</style>
