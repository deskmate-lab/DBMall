<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 最好不要直接在<slot>标签上添加指令，因为<slot>届时都会被<template>替换掉 -->
    <div v-if="isActive"><slot name="item-active-icon"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="{ color: getColor }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    // 先给父组件App中的<tab-bar-item>绑定link属性，然后通过父向子通信拿到link的值
    props: {
      // MainTabBar父组件中给每个<tab-bar-item>添加了link属性，属性值为字符串，直接通过props就可以传递给子组件，不需要再使用v-bind指令
      link: String,
      activeColor: {
        type: String,
        // 让开发者使用组件时自己定义激活时的颜色
        default: '#000'
      },
    },
    computed: {
      isActive() {
        // 如果当前路由包含link值，则添加.active样式
        return this.$route.path.indexOf(this.link) !== -1;
      },
      getColor() {
        return this.isActive ? this.activeColor : '';
      },
    },
    methods: {
      itemClick() {
        if (this.link != this.$route.path) {
          this.$router.replace(this.link);
        }
      },
    },
  };
</script>

<style scoped>
  .tab-bar-item {
    text-align: center;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>
