const resolveApp = require("./path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge"); //不需要安装
const commonConfig = {
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
    filename: "js/[name].bundle.js",
    chunkFilename: "[name].chunk.js", //配置异步分包的名字
  },
  optimization: {
    //optimization 最优化
    // minimize:true,
    // 对代码进行压缩相关的操作
    minimizer: [
      new TerserPlugin({
        extractComments: false,
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
          test: /[\\/]node_modules[\\/]/,
          filename: "[id]_vendors.js",
          name: "abc", //filename和name的区别就是一个名字写死一个没有写死，filename可以使用占位
          priority: -10, //优先级 谁大以谁先
        },
        // test: {
        //   test: /test/,
        //   filename: "[id]_test.js",
        // },
        default: {
          minChunks: 2,
          filename: "common_[id].js",
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
};
const proConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");
module.exports = function (env) {
  const isDevelopment = env.development;

  process.env.development = isDevelopment ? "development" : "production";
  // 这里一定要这么写
  return isDevelopment
    ? merge(commonConfig, devConfig)
    : merge(commonConfig, proConfig);
};
