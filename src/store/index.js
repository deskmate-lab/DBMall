import Vue from 'vue'
import Vuex from 'vuex'

import {
  PUSH_CART_LIST,
  INCREMENT,
  TOGGLE,
  TOGGLE_ALL_CHECKED
} from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {
    // 商品种类数
    cartListLength(state) {
      return state.cartList.length
    },
    // 选中商品总价格
    totalPrice(state) {
      let totalPrice = 0;
      state.cartList.filter(item => item.checked).forEach(item => {
          totalPrice += item.count * item.price;
      })
      return totalPrice.toFixed(2)
    },
    // 选中商品总件数
    totalCount(state) {
      let totalCount = 0;
      state.cartList.filter(item => item.checked).forEach(item => {
        totalCount += item.count;
      })
      return totalCount
    }
  },
  mutations: {
    [PUSH_CART_LIST](state, payload) {
      state.cartList.push(payload)
    },
    [INCREMENT](state, payload) {
      payload.count++
    },
    [TOGGLE](state, payload) {
      let clickedProduct = state.cartList.find(item => item.iid === payload.iid);
      clickedProduct.checked = !clickedProduct.checked;
    },
    [TOGGLE_ALL_CHECKED](state, payload) {
      state.cartList.forEach(item => {
        item.checked = payload;
      })
    }
  },
  actions: {
    addToCart(ctx, payload) {
      // find()返回数组中满足条件的第一个元素的值，如果没有返回undefined
      let oldProduct = ctx.state.cartList.find(item => item.iid === payload.iid);
      if(oldProduct === undefined) {
        ctx.commit('pushCartList', payload)
      } else {
        // oldProduct和item同时指向了某一数组元素对象，因此可以直接修改count属性
        ctx.commit('increment', oldProduct)
      }
    }
  }
})

export default store
