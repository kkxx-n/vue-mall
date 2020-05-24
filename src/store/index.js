import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  // 修改state中的状态
  // mutations 中的方法尽量单一
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    // Array.prototype.find()
    // find()方法返回数组中满足提供测试函数的第一个元素的值
    addCart(context, payload) {
      // payload 为新添加的商品
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)


        if (oldProduct) {
          // oldProduct.count += 1
          context.commit('addCounter', oldProduct)
          resolve('当前数量加一')
        } else {
          payload.count = 1
          // context.state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
        reject('失败')
      })

    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    },
    totalPrice(state) {
      return state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
    }
  }
})



export default store
