<template>
  <ul class="menu">
    <li class="menu-item"
    :class="{active: index === currentIndex}"
        v-for="(item, index) in menu"
        :key="index"
        @click="menuClick(index)">
    {{item.title}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CategoryMenu',
    props: {
      menu: {
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
      menuClick(index) {
        // 节流：当点击的不是当前item，才进行下一步操作
        if(index !== this.currentIndex) {
          this.currentIndex = index;
          this.$emit('menu-click', index)
        }
      }
    }
  }
</script>

<style scoped>
  .menu {
    width: 100px;
  }

  .menu-item {
    height: 44px;
    line-height: 44px;
    border-left: 3px solid transparent;
  }

  .active {
    background-color: #fff;
    color: var(--color-highlight-text);
    font-weight: 700;
    border-left-color: var(--color-tint);
  }
</style>
