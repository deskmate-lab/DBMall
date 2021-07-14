<template>
  <div class="tab-control">
    <span class="tab-control-item" v-for="(item, index) in titles" :key="index" @click="itemClick(index)" :class="{active: index === currentIndex}">
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
    line-height: 40px;
    background-color: #fff;

    /* position: sticky;
    top: 44px; */
    margin-bottom: 10px;
    z-index: 8;
  }

  .tab-control-item {
    padding: 4px;
  }

  .active {
    color: var(--color-highlight-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
