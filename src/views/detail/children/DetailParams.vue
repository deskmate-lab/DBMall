<template>
  <div class="params-info">
    <table class="size-info">
      <tr v-for="(item, index) in paramsInfo.sizeInfo" :key="index">
        <th>{{item[0]}}</th>
        <!-- v-for="index in n"，index从1遍历到n -->
        <td v-for="tdIndex in item.length - 1" :key="tdIndex">{{item[tdIndex]}}</td>
      </tr>
    </table>
    <table class="product-info">
      <tr v-for="(item, index) in paramsInfo.productInfo" :key="index">
        <th>{{item.key}}</th>
        <!-- v-for="index in n"，index从1遍历到n -->
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DetailParams',
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info {
    padding: 20px 0;
    border-bottom: 5px solid rgb(150, 150, 150, .12);
  }

  .size-info,
  .product-info {
    width: 90%;
    margin: 10px 5%;
    line-height: 1.8;
  }

  .size-info {
    text-align: center;
    line-height: 2;
    border-bottom: 1px solid rgb(150, 150, 150, .3);
  }

  .size-info th,
  .product-info th {
    text-align: left;
    width: 20%;
    font-weight: 400;
  }

  .product-info td {
    color: var(--color-highlight-text);
    line-height: 1;
  }
</style>
