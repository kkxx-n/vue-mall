import Vue from 'vue'
import App from './App.vue'
import router from './router/idnex'
import store from './store'


import FastClick from 'fastclick'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading: require('./assets/images/common/placeholder.png')
})

import toast from './components/common/toast/index'
Vue.use(toast)

Vue.config.productionTip = false

// 加载这个插件就会执行install函数


Vue.prototype.$bus = new Vue()

// 解决移动端300毫秒延迟
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')

