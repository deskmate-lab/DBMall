import Vue from 'vue'
import Vuex from 'vuex'

import {
  PUSH_CART_LIST,
  INCREMENT
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
    // 商品总件数
    totalCount(state) {
      let totalCount = 0;
      state.cartList.forEach(item => {
        totalCount += item.count;
      })
      return totalCount
    },
    // 商品总价格
    totalPrice(state) {
      let totalPrice = 0;
      state.cartList.forEach(item => {
        totalPrice += item.count * item.price;
      })
      return totalPrice.toFixed(2)
    }
  },
  mutations: {
    [PUSH_CART_LIST](state, payload) {
      state.cartList.push(payload)
    },
    [INCREMENT](state, payload) {
      payload.count++
    }
  },
  actions: {
    addToCart(ctx, payload) {
      // find()返回数组中满足条件的第一个元素的值，如果没有返回undefined
      let oldProduct = ctx.state.cartList.find(item => item.iid === payload.iid)
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
