const resolveApp = require("./path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); //默认就有这个包
const { merge } = require("webpack-merge"); //不需要安装
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let status = "production";
const commonConfig = (status) => ({
  // watch: true,

  // entry: {
  //   main: { import: "./src/js/test1.js", dependOn: "shared" },
  //   index: { import: "./src/js/test2.js", dependOn: "shared" },
  //   shared: ["lodash", "dayjs"],
  // },
  entry: {
    main: "./src/js/test1.js",
    index: "./src/js/test2.js",
  },
  // entry: "./src/common_index.js",
  output: {
    path: resolveApp("./build"),
    filename: "js/[name].[chunkhash:3].bundle.js",
    chunkFilename: "[name].[contenthash:3].chunk.js", //配置异步分包的名字
    // publicPath: "https://www.baidu.com/cdn/", //这里就可以配置cdn服务器地址
  },
  //  hash值根据index的内容来确定的，如果一旦某个index的内容被修改 ，那么整个文件的名称都会被修改  所以这样对打包不好
  // chunkhash 就是这个文件修改被修改，其他入口的文件就不会被干扰，但是他的依赖的包还是会被修改
  // contenthash就不会影响到导入的包的文件,所以独立的包一般推荐使用contenthash
  optimization: {
    //optimization 最优化
    // minimize: true,//这个设置为true，terser就会被打开(默认会被开启)
    usedExports: true, //目的：标注出来哪些函数是没有被使用的，然后由terser将未使用的函数，从我们的代码中删除(默认会被开启)
    // 对代码进行压缩相关的操作,在production模式中，默认会开启terser，对js代码压缩丑化
    minimizer: [
      new TerserPlugin({
        //terser  简洁的 他是js的解释(parser)、压缩机/绞肉机的集合
        extractComments: false, //把抽取出来的包生成的注释给删掉
        parallel: true, //使用多进程并发运行以提高构建速度，强烈建议添加次配置
      }),
    ],
    //natural   使用自然数 ( 不推荐 )
    // named ：使用包所在目录作为name(在开发环境推荐)
    // deterministic ：生成id,针对相同文件生成的id是不变的(生产环境推荐)
    chunkIds: "deterministic", //这个不需要配置，webpack会自动识别环境来配置
    // runtimeChunk 的值：true/multiple效果一样
    // single
    // object name
    runtimeChunk: {
      name: "runtime-sai",
    }, //配置异步引入的代码是否单独放到一个chunk中
    splitChunks: {
      // chunks: "async",//处理异步代码
      // chunks:'initial',//处理同步代码
      chunks: "all", //处理异步和同步
      // 最小尺寸：如果拆分出来一个包，name拆分出来的这个包的最小为minSize
      minSize: 20000,
      // 将大于maxSize的包，拆分成不小于minSize的包
      maxSize: 20000,
      // 就是某个包被引入的包，至少被导入几次
      minChunks: 1,
      cacheGroups: {
        //缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,//拆分第三方包
          filename: "js/[id].[contenthash:3]_vendors.js",
          // name: "abc", //filename和name的区别就是一个名字写死一个没有写死，filename可以使用占位
          priority: -10, //优先级 谁大以谁先
        },
        // test: {
        //   test: /test/,
        //   filename: "[id]_test.js",
        // },
        default: {
          minChunks: 2,
          filename: "common[contenthash:3]_[id].js",
          priority: -20,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //jsx? 表示的意思是x可以有也可以没有
        exclude: /node_modules/, //这个文件不需要使用babel
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          status == "production" ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ], //css代码的压缩
        sideEffects: true, //这样就可以使用 import引入
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

  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".ts", ".vue", ".jsx"], //配置可以简写后缀名的配置
    alias: {
      "@": resolveApp("./src"), //配置文件别名
      pages: resolveApp("./pages"),
    },
  }, //设置模块如何被解析
  plugins: [
    // loader是用于特定的木块类型进行转换
    // plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量的注入等

    new HtmlWebpackPlugin({
      title: "你好", //设置网站的title
      template: "./public/index.html", //生成的index.html是自己创立的模板，没有使用默认的模板，

      inject: true, //默认true
      cache: true, //当文件没有发生变化的时候，直接使用之前的缓存
      minify: {
        //使变小
        removeComments: true, //移除index里面的注释
        removeEmptyAttributes: true, //移除空属性
        removeRedundantAttributes: true, //移除标签身上多余的属性,比如input默认属性是text，就不要写了
        collapseWhitespace: true, //折叠空格
        minifyCSS:true,//压缩style标签内的代码
        minifyJS:{//压缩script脚本内的代码
          mangle:{
            toplevel:true//丑化js代码
          }
        }
      },
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
  ],
});
const proConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");
module.exports = function (env) {
  const isDevelopment = env.development;
  status = isDevelopment ? "development" : "production";

  process.env.development = isDevelopment ? "development" : "production";
  // 这里一定要这么写
  return isDevelopment
    ? merge(commonConfig(status), devConfig)
    : merge(commonConfig(status), proConfig);
};
