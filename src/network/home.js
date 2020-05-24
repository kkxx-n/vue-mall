// 封装首页的网络请求
import {
  requestPromise
} from './request'

export function getHomeAxios() {
  return requestPromise({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return requestPromise({
    url: '/home/data',
    // params 参数 执行query语句
    params: {
      type,
      page
    }
  })
}


//   函数调用 -> 压入函数栈 （保存函数调用过程中所有变量）
// 函数调用结束后  会结束函数栈（释放函数中所有的变量）
// 在循环体中遇到定时器 循环、事件监听或其他类似的执行体。会执行循环，讲i值保存到一个栈中，并不会立即执行。当for循环结束后，函数执行。
