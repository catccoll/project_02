const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //导入 打包删除之前的包 的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //将css拆分到一个文件夹
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin"); //压缩css代码插件
const PurgeCssWebpackPlugin=require('purgecss-webpack-plugin')//csstreeshaking插件
const glob=require('glob')//自带的库
const webpack=require('webpack')//自带
const CompressionWebpackPlugin=require('compression-webpack-plugin')//对
const resolveApp=require('./path')
const InLineChunkHtmlPlugin=require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  mode: "production",
  plugins: [
    // loader是用于特定的模块类型进行转换
    // plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量的注入等
    new CleanWebpackPlugin(), //作用：在打包的时候会将多余的文件进行删除
    new MiniCssExtractPlugin({//将css文件打包到哪个文件下
      filename: "css/[name].[contenthash:3].css",
    }),
    new CssMinimizerWebpackPlugin(), //压缩css代码
    new webpack.optimize.ModuleConcatenationPlugin(),//作用域提升 ，也就是执行命令与被执行函数在同一个作用域里面，不用导出去找，效率更高
    new PurgeCssWebpackPlugin({
      paths:glob.sync(`${resolveApp('./src')}/**/*`,{nodir:true}),//nodir:true匹配文件，不是文件夹，匹配src下的文件都进行tree-shaking
      safelist:function(){
        return{
          standard:['html','body']//这两个即使使用了也会被css treeshaking给删除掉，所以要这么写就不会被删除，css treeshaking就是把没有哟用到的css类名删除掉
        }
      }
   
    }),
    new CompressionWebpackPlugin({//http文件压缩的第一步骤在webpack中完成
      test:/\.(css|js)$/,  //匹配要压缩的文件
      minRatio:0.8,//至少的压缩比例,默认0.8
     algorithm:'gzip'//采用的压缩算法
    }),
  new  InLineChunkHtmlPlugin(HtmlWebpackPlugin,[/runtime-sai.*\.js/])//将某个文件注入到html文件当中，减少请求
  ],
  devtool: "cheap-module-source-map",
  externals: {
    //external 在外部的  这个处理第三方包，使他不被打包，不被打包就不能用，那就只能在index里面自己引进cdn链接，且这个全局暴露出来的对象不能乱取名字
    lodash: "_",
    dayjs: "dayjs",
  },
};
// 作用域提升：作用对作用域进行提升，并且让webpack打包后的代码更小，运行更快