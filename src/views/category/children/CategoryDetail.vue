<template>
  <ul class="submenu">
    <li class="submenu-item" v-for="(item, index) in submenu" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <p class="text">{{item.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CategoryDetail',
    props: {
      submenu: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        imgCount: 0
      }
    },
    watch: {
      submenu() {
        this.$emit('submenu-update')
      }
    }
  }
</script>

<style scoped>
  .submenu {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 10px;
  }

  .submenu-item {
    width: 33%;
    color: #999;
    font-size: 12px;
  }

  .submenu-item img {
    width: 50px;
    height: 50px;
    margin: 20px 0 10px;
  }

  .submenu-item p {
    margin-bottom: 10px;
  }
</style>
