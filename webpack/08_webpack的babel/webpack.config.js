const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //导入打包删除之前的包的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/js/react_main.js", //这里是相对路经，入口的文件
  output: {
    path: path.resolve(__dirname, "./build"), //这里必须是绝对路经
    // path.resolve(__dirname)//获取到绝对路经
    filename: "js/bundle.js", //将js代码抽离到js文件下  所以是js/
    // assetModuleFilename: "img/[name].[hash:3][ext]", //在这里ext前面就不需要加.了因为这里默认给我们加了  url-loader和file-loader是没有帮我们添加，但是这种写法了解，因为我们会创建多个文件夹，这样创建就写死了
  },

  plugins: [
    // loader是用于特定的木块类型进行转换
    // plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量的注入等
    new CleanWebpackPlugin(), //作用：在打包的时候会将多余的文件进行删除
    new HtmlWebpackPlugin({
      title: "你好", //设置网站的title
      template: "./public/index.html", //生成的index.html是自己创立的模板，没有使用默认的模板
    }), //作用：生成index.html入口文件
    new DefinePlugin({
      //作用  定义全局的常量
      BASE_URL: '"./"', //这里是两层字符串
    }),
    new CopyWebpackPlugin({
      //作用：赋值文件的
      // pattern:复写的意思
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"], //忽略的文件前面必须加  **/
          },
          // to: 这个属性一般不写，写了就相当于写死了   他会自动to到output路经，就不会写死
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //这个文件不需要使用babel
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   // 写法一：不建议
            //   presets: [
            //     [
            //       "@babel/preset-env",
            //       {
            //         targets: ["chrome 88"],
            //         esmodules:true

            //       },
            //     ],
            //   ],
            //   // 写法二：
            //   // presets:['@babel/preset-env']
            //   // presets:['@babel/preset-env','preset-react']
            //   // 根据.browserslistrc文件生成的浏览器做相应的代码转化
            // },
          },
        ],
      },
    ],
  },
  mode: "development", //三个可选值 none|development(没有压缩代码和丑化)|production(经过丑化和压缩的代码 bundle.js
  devtool: "cheap-module-source-map",
  /**作用：1.是从已转换的代码，映射到原始的源文件;使浏览器可以重构原始源并在调试器中显示重建的原始源
   *归根结底一句话： source-map方便调试，可以精确的查找到在哪一个文件，哪一行出现了错误
   */
};
// babel 是一个工具链，主要用于将ECMAScript2015+代码转换为向后兼容版本的js使得浏览器能够识别，包括语法转换、源代码转换、polyfill实现目标缓解缺少的功能

// 下载他的作用是为了在命令行上操作...cli的

// npm install @babel/core -D
// npm install @babel/preset-env -D
// babel编译执行的原理过程：原生源代码->词法分析->tokens数组->语法分析->生成ast抽象语法树->遍历->访问节点->应用插件(plugin)->新的AST->目标源代码
