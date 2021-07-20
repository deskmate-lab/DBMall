<template>
  <!-- 如果detailInfo数据没有请求过来，则不予显示 -->
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <p class="desc clear-fix">{{detailInfo.desc}}</p>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailDetailInfo',
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        imgCount: 0
      }
    },
    methods: {
      // 1) 每加载一张图片发射一次事件
      imgLoad() {
        this.$emit('img-load')
      }

      // 2) 等最后一张图片加载完再一次性发射事件
      // imgLoad() {
      //   this.imgCount++;
      //   if(this.imgCount === this.detailInfo.detailImage[0].list.length) {
      //     this.$emit('img-load')
      //   }
      // }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding-bottom: 20px;
    border-bottom: 5px solid rgb(150, 150, 150, .12);
  }

  .info-desc {
    padding: 20px 12px;
  }

  .info-key {
    padding: 0 12px 10px;
    color: #333;
    font-size: 16px;
  }

  .desc {
    margin: 10px 0;
  }

  .end {
    float: right;
  }

  .start,
  .end {
    width: 100px;
    height: 1px;
    background-color: #333;
    position: relative;
  }

  .start::before,
  .end::after {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #333;
    position: absolute;
  }

  .start::before {
    top: -5px;
    left: 0;
  }

  .end::after {
    top: 0;
    right: 0;
  }

  .info-list {
    font-size: 0;
  }

  .info-list img {
    width: 100%;
  }
</style>
