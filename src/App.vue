<template>
  <div id="app">
    <!-- keep-alive包裹不仅能保存页面/组件的状态，它还可以避免组件反复创建和渲染 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import url('~assets/css/base.css');
</style>
