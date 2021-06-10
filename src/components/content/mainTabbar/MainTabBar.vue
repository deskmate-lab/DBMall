<template>
  <div>
    <router-view />
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-active-icon" src="~assets/img/home_active.png" alt="" />
        <img slot="item-icon" src="~assets/img/home.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-active-icon" src="~assets/img/category_active.png" alt="" />
        <img slot="item-icon" src="~assets/img/category.png" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-active-icon" src="~assets/img/cart_active.png" alt="" />
        <img slot="item-icon" src="~assets/img/cart.png" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-active-icon" src="~assets/img/profile_active.png" alt="" />
        <img slot="item-icon" src="~assets/img/profile.png" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>
