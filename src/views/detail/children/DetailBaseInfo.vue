<template>
  <div class="base-info">
    <p class="title">{{baseInfo.title}}</p>
    <div>
      <span class="newPrice">{{baseInfo.newPrice}}</span>
      <span class="oldPrice">{{baseInfo.oldPrice}}</span>
      <!-- 当baseInfo.discountDesc为空时不显示span.discount -->
      <span class="discount" v-if="baseInfo.discountDesc" :style="{backgroundColor: baseInfo.discountBgColor}">{{baseInfo.discountDesc}}</span>
    </div>
    <div class="other-info">
      <span v-for="(item, index) in baseInfo.otherInfo" :key="index">{{item}}</span>
    </div>
    <ul class="services">
      <li v-for="(item, index) in baseInfo.services" :key="index">
        <img :src="item.icon" />
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      baseInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 20px 12px;
    padding-bottom: 20px;
  }

  .title {
    margin-bottom: 8px;
    color: #000;
    font-size: 18px;
    text-align: justify;
    /* 这行必加，兼容ie浏览器 */
    text-justify: distribute-all-lines;
  }

  .newPrice {
    margin-right: 8px;
    color: var(--color-highlight-text);
    font-size: 24px;
  }

  .oldPrice {
    /* 添加删除线 */
    text-decoration: line-through;
  }

  .discount {
    position: relative;
    top: -10px;
    padding: 4px;
    color: #fff;
    border-radius: 9px;
    font-size: 12px;
  }

  .other-info {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid rgb(150, 150, 150, .3);
  }

  .services li {
    display: inline-block;
    line-height: 1.5;
    margin: 0 8px 0 12px;
    color: #000;
    position: relative;
  }

  .services li img {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 3px;
    left: -13px;
  }
</style>
