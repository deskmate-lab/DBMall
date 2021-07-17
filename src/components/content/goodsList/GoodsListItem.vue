<template>
  <div class="goods-item" @click="goodsItemClick">
    <!-- vue中通过load事件监听图片加载是否完成 -->
    <img :src="goodsItem.show.img" @load="imgLoad" />
    <div class="goods-item-info">
      <p>{{goodsItem.title}}</p>
      <span class="item-price">{{goodsItem.price}}</span>
      <span class="item-collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('item-img-load')
      },
      goodsItemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 47%;
    position: relative;
    padding-bottom: 40px;
  }

  .goods-item img{
    width: 100%;
    border-radius: 4px;
  }

  .goods-item-info {
    width: 100%;
    height: 40px;
    position: absolute;
    left: 0;
    bottom: 0;

    font-size: 12px;
    text-align: center;
  }

  .goods-item-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .goods-item-info .item-price {
    margin-right: 20px;
    color: var(--color-highlight-text);
  }

  .goods-item-info .item-collect {
    position: relative;
  }

  .goods-item-info .item-collect::before {
    content: '';
    width: 14px;
    height: 14px;
    background: url('~assets/img/goodsList/collect.png') 0 0/14px 14px no-repeat;
    position: absolute;
    left: -14px;
  }
</style>
