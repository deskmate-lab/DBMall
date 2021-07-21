<template>
  <tab-bar>
    <tab-bar-item link="/home" :activeColor="activeColor">
      <img slot="item-active-icon" src="~assets/img/tabbar/home_active.png" />
      <img slot="item-icon" src="~assets/img/tabbar/home.png" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" :activeColor="activeColor">
      <img slot="item-active-icon" src="~assets/img/tabbar/category_active.png" />
      <img slot="item-icon" src="~assets/img/tabbar/category.png" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" :activeColor="activeColor">
      <img slot="item-active-icon" src="~assets/img/tabbar/cart_active.png" />
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" :activeColor="activeColor">
      <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.png" />
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {
        activeColor: '#ff5777'
      }
    }
  }
</script>

<style scoped>

</style>
