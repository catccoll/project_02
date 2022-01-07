const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //导入 打包删除之前的包 的插件

module.exports = {
  mode: "production",
  plugins: [
    // loader是用于特定的木块类型进行转换
    // plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量的注入等
    new CleanWebpackPlugin(), //作用：在打包的时候会将多余的文件进行删除

  ],
  devtool: "cheap-module-source-map",
};
