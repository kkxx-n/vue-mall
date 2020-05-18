// 公共配置

module.exports = {
    // 配置webpack的config
    configureWebpack:{
        // resolve解决
        resolve:{
            // extensions:[],
            // 别名
            alias:{
                // 默认路径配置
                // '@':'src'
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}