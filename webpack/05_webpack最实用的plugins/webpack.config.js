const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //导入打包删除之前的包的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js", //这里是相对路经
  output: {
    path: path.resolve(__dirname, "./build"), //这里必须是绝对路经
    // path.resolve(__dirname)//获取到绝对路经
    filename: "js/bundle.js", //将js代码抽离到js文件下  所以是js/
    // assetModuleFilename: "img/[name].[hash:3][ext]", //在这里ext前面就不需要加.了因为这里默认给我们加了  url-loader和file-loader是没有帮我们添加，但是这种写法了解，因为我们会创建多个文件夹，这样创建就写死了
  },
  module: {
    rules: [
      {
        test: /\.css$/, //匹配文件资源
        // 1.loader的写法
        use: [
          "style-loader", //这个loader会将css插入到页面中去，原理createElement(<style> 样式 </style>)
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          }, //解析css文件，但是不会插入到页面中去
          // loader还可以有参数，options
          // {
          //   loader: "postcss-loader", //将css最新样式得到浏览器识别的样式，给css样式加浏览器前缀，起到兼容
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          // require('postcss-preset-env)
          //         "postcss-preset-env"
          //       ],
          //       // autoprefixer插件只会添加前缀，不会转换css特性
          //     },
          //   },
          // },
          "postcss-loader",
        ],
        // 第二种写法
      },
      {
        test: /\.(jpg|png|jfif|gif|svg|jpeg)$/,
        // type: "asset/resource", //webpack5 的新用法 相当于filename
        // type: "asset/inline", //相当于url-loader
        // type:'asset'相当于url-loader和file-loader的结合
        type: "asset", //且在require的时候  不在需要使用.default
        generator: {
          filename: "img/[name].[hash:3][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/, //iconFont字体打包
        type: "asset/resource",
        generator: {
          filename: "icon/[name].[hash:3][ext]",
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              //     importLoaders他的作用是  @import引入的css文件并不会被其他的loader进行处理，比如less-loader，postcss-loader等等，所以要加这样一个属性，才能再被之前的loader进行处理,数量代表前面有几个loader。
            },
          },
          "postcss-loader",
          {
            loader: "less-loader", //解析less需安装less和less-loader
          },
        ],
      },
    ],
  },
  plugins: [
    // loader是用于特定的模块类型进行转换
    // plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量的注入等
    new CleanWebpackPlugin(), //作用：在打包的时候会将多余的文件进行删除
    new HtmlWebpackPlugin({
      title: "你好", //设置网站的title
      template: "./public/index.html", //生成的html是自己创立的模板，没有使用默认的模板
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
};
