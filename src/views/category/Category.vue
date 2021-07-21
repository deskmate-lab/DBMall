<template>
  <div></div>
</template>

<script>
  import {getCategory} from 'network/category'

  export default {
    name: "Category",
    data() {
      return {
        category: []
      }
    },
    created() {
      getCategory().then(result => {
        console.log(result);
        this.category = result.data.category.list;
      })
    }
  }
</script>

<style scoped>
  
</style>
