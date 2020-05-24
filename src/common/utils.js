// 防抖函数

export function debounde(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 利用闭包把保存变量       内部函数依然保持着对其所在作用域的持有 且在这个函数被定义的作用域之外被引用

// function debounde1(func, dealy) {
//   let timer = null

//    return function (...args) {
//     if(timer !== null)  clearTimeout(timer)
//     timer = setTimeout(() => {
//       func.apply(this,args)
//     }, dealy)
//   }

// }

// 时间格式化
export function formatDate(date, fmt) {
  // 获取年份
  // 正则表达式：用于字符串匹配 (规则太多) ‘/(y+)/’    y+表示一个或多个 Y*表示0个或者多个 y?表示0个或者1个
  // test检索一个字符串是否匹配对应的模式  返回一个布尔值
  if (/(y+)/.test(fmt)) {
    // replace（替换、更换） 用于在字符串中用一些字符替换掉另外一些字符，或者替换i一个正则表达式的字符串
    // stringObject.substr(start,length)  方法可在字符串中抽取从 start 下标开始的指定数目的字符(截取字符串)
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // 获取
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
