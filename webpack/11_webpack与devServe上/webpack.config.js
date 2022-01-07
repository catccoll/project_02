const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //导入 打包删除之前的包 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); //1.加载react热更新模块2.new 插件 3.在babel.config.js中配置插件 
module.exports = {
  // watch: true,
  devServer: {
    hot: true,
    open:true
  },
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
    new VueLoaderPlugin(),
    new ReactRefreshPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, //jsx? 表示的意思是x可以有也可以没有
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
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          // 处理ts文件的第一种方式 loader:'ts-loader
          // loader: "ts-loader", //依赖于typescript(compiler) 所以要先安装typescript,不安装也可以，因为ts-loader的package.json里面有依赖，所以不用下载也可以，就好像解析less文件的时候，
          // 处理ts文件的第二种方式 loader:'babel-loader'
          // 使用babel-loader处理ts文件的优点就是可以polyfill,但是缺点就是不会做类型检测，即使类型错了，还是会可以正常打包,如果使用ts-loader的话，就会对类型做检测，类型错误，就无法正常打包,所以建议在package.json文件中，先启动对tsc命令且--watch 然后在书写代码的时候就可视实时监听到ts文件的代码格式是否正确书写
          { loader: "babel-loader" },
        ],
      },

      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            //解析vue文件还需vue的插件vue-loader/lib/plugin下面的插件
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
/**
 * 使用本地服务的问题:
 * 问题一：每次修改源代码之后，我们都需要重新执行npm run build
 *  1.通过watch来监听源代码变化：这个watch可以写在package当中，也可以写在webpack.config.js当中
 * 2.通过live-serve插件提供本地服务(当文件变化时，自动刷新页面)
 * 但是这种开发效率并不是特别高:
 * 1.对所以的源代码都重新进行编译
 * 2.编译成功后，都会生成新的文件(文件操作)
 * 3.live-serve属于VScode插件->不属于webpack个我们的解决发方案
 * 4.live-serve每次都会刷新整个页面
 * npm run serve 它将编译的结果放到了内存当中，速度更快，且实现了热更新,但是会刷新生个页面，性能也不高
 *
 *
 * HMR=>HOT MODULE REPLACEMENT
 * 不重新加载整个页面，这样可以保留某些应用程序的状态不丢失
 */
