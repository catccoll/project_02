const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports={
    mode:'development',
    devServer: {
        hot: true, //开启热更新，但是是整个重载
        // host:'0.0.0.0',
        // port:7777,
        open: true, // 为什么打不开
        compress: true, //是否为静态文件开启Gzip compression 性能优化
        // proxy: { //解决跨域问题
        //   // "/api": "http://www.baidu.com",
        //   "/sai": {
        //     target: "http://www.baidu.com", //默认不支持https
        //     secure: false, //这样就可以支持https
        //     changeOrigin: true, //这个一般都要写，这样就会使用http://www.baidu.com+接口
        //     pathRewrite: {
        //       "^/sai": "",
        //     },
        //   },
        // },
        historyApiFallback: true, //解决history刷新 页面丢失的情况，除了true还可以接对象
      },
      plugins:[
        new ReactRefreshPlugin(),
      ]
}