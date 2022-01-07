const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //导入 打包删除之前的包 的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")//将css拆分到一个文件夹
module.exports = {
  mode: "production",
  plugins: [
    // loader是用于特定的木块类型进行转换
    // plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量的注入等
    new CleanWebpackPlugin(), //作用：在打包的时候会将多余的文件进行删除
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:3].css",
    }),
  ],
  devtool: "cheap-module-source-map",
  externals: {
    //external 在外包  这个处理第三方包，使他不被打包，不被打包就不能用，那就只能在index里面自己引进cdn链接，且这个全局暴露出来的对象不能乱取名字
    lodash: "_",
    dayjs: "dayjs",
  },
};
