// 封装首页的网络请求
// requestPromise就是一个Axios对象
import {
  requestPromise
} from './request'

export function getDetail(iid) {
  // 就是一个instance实例
  return requestPromise({
    url: '/detail',
    params: {
      iid
    }
  })
}


// 整合detail中的数据  面向一个对象获取数据
export class Goods {
  // constructor 中 this指向的是实例对象
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}


// 商品详情页的数据
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.size = rule.tables
  }
}

// es6中的class就是一个构造函数的语法糖
// class Person {
//   constructor(name,age) {
//     this.name = name
//     this.age = age 
//   }
// }

// const p  =new Person('shy',18)

export function getRecommend() {
  return requestPromise({
    url:'/recommend'
  })
  }