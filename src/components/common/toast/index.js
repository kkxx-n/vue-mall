import Toast from './Toast.vue'

const obj = {}

obj.install = function (vue) {
  // 创建组件构造器
  const toastContrustor = vue.extend(Toast)
  // new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastContrustor()
  // 根据组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //  toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  console.log('执行obj的install', vue);
  vue.prototype.$toast = toast
}

export default obj
