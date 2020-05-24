module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视口的宽度，对应的是我们设计稿的宽度
      viewportHeight:667,//视口的宽度，对应的是我们设计稿 的高度
      unitPrecision:5,//包留的小数数位
      viewportUnit:'vw',//指定需要转换的视窗单位，建议vw
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
      minPixelValue:1,//小于或者等于‘1px’不需要转换
      mediaQuery:false,//允许在媒体查询中转换‘px’
      exclude:[/TabBar/]
    }
  }
}

// 正则规则
//sd