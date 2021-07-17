<template>
  <div class="tab-control">
    <span class="tab-control-item" v-for="(item, index) in titles" :key="index" :class="{active: index === currentIndex}" @click="itemClick(index)">
      {{item}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        
        // 自定义tab-click事件传递给父组件
        this.$emit('tab-click', index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 30px;
    background-color: #fff;

    /* position: sticky;
    top: 44px;
    z-index: 8; */
    padding-bottom: 6px;
  }

  .tab-control-item {
    padding: 4px;
  }

  .active {
    color: var(--color-highlight-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
