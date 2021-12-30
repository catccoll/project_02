const path = require("path");
module.exports = {
  entry: "./src/index.js", //这里是相对路经
  output: {
    path: path.resolve(__dirname, "./build"), //这里必须是绝对路经
    // path.resolve(__dirname)//获取到绝对路经
    filename: "bundle.js",
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
        use: [
          // 解析图片的require和import方式
          {
          loader:'url-loader',
            // loader: "file-loader",//这个了解  一般使用url-loader
            /**
             * 比较大图片需要单独的放到单独的文件里面
             * 比较小图片需要放放转换为浏览器可以识别的base64，减少http的请求
             *  */ 
            // 对打包后的图片进行重新命名:name本身文件名 hash值长度为3 ext文件扩展名
            options: {
              name: "img/[name].[hash:3].[ext]", //在前面加文件夹名更常见
              // outputPath:'img'//打包之后存在哪个文件当中
              limit:100*1024//根据图片的大小来分形式，到底是单独放一个文件夹还是直接插入到js当中，减少http的请求
            },
          },
        ],
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
};
// 1.loader解析的顺序  从下往上从右往左
//2（重点）. postcss 作用  自动添加浏览加前缀 ，将最新css特性转换为浏览器识别的样式
// 3.当你执行npm run build的时候，他首先会去webpack.config.js合并配置项，没有的话就去package.json 下面看看他把webpack.config.js改成什么了，但是我不想叫webpack.config.js，怎么办呢
// 4.当一个js文件里面创造了一个函数，在其他地方引入了，我打包时需要把他打包进去吗，其实是不需要的，所以后面会有性能优化配置
// 5.loader可以用于对模块的原地吗进行转换
// 6.loader可以有两种方式，一个是内联样式，另一个是webpack.config.js来进行配置  例如 'css-loader! abc.css'这个了解就行
// browsersList（重要）是一个在不同的前端工具之间，共享目标浏览器和node.js版本的配置,查询适配的浏览器，让这个项目在这些浏览器才能跑起{ >1%  市场份额大于1%的浏览器  last 2versions 最近2个版本的浏览器        dead 24个月没有官方支持或更新的浏览器  ,/or 表示并集，满足一个条件即可}
//一. 掌握webpack手动指定配置文件
// 二.理解webpack的关系依赖图
// 三.css-loader的使用和rule配置
