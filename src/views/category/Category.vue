<template>
  <div>
    <nav-Bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-Bar>

    <div class="category-content">
      <!-- 一级分类 -->
      <scroll class="wrapper-left">
        <category-menu :menu="menu" @menu-click="menuClick" />
      </scroll>

      <!-- 二级分类 -->
      <scroll class="wrapper-right" ref="right">
        <category-detail  :submenu="submenu" @submenu-update="refresh" />
      </scroll>
    </div>
  </div>
</template>

<script>
  import CategoryMenu from './children/CategoryMenu'
  import CategoryDetail from './children/CategoryDetail'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import {getMenu, getSubmenu} from 'network/category'

  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      CategoryMenu,
      CategoryDetail
    },
    data() {
      return {
        menu: [],
        submenu: []
      }
    },
    created() {
      this._getMenu()
    },
    updated() {
      
      },
    methods: {
      menuClick(index) {
        this._getSubmenu(index)
        // 左边menu发生点击，右边submenu回到顶部
        this.$refs.right.bs.scrollTo(0, 0)
      },
      refresh() {
        this.$refs.right.bs.refresh()
        console.log('refresh');
      },

      // 1.获取一级分类数据并保存
      _getMenu() {
        getMenu().then(result => {
          this.menu = result.data.category.list;
        })
        // 注：一级分类保存后，默认获取index为0的二级分类
        .then(() => this._getSubmenu(0))
      },
      // 2.获取二级分类数据并保存
      _getSubmenu(index) {
        getSubmenu(this.menu[index].maitKey).then(result => {
          this.submenu = result.data.list;
        })
      }
    }
  }
</script>

<style scoped>
  .category-nav {
    color: #fff;
    background-color: var(--color-tint);
  }

  .category-content {
    display: flex;
    text-align: center;
  }

  .wrapper-left,
  .wrapper-right {
    height: calc(100vh - 93px);
    overflow: hidden;
  }

  .wrapper-left {
    background-color: #f8f8f8;
  }

  .wrapper-right {
    flex: 1;
  }
</style>
