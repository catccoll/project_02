const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 1.loader的写法
        use: [
          "style-loader",
          "css-loader",
          // loader还可以有参数
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
        ],
        // 第二种写法
      },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
    ],
  },
};
// 模块加载的顺序  从下往上从右往左
// postcss 作用  加前缀 ，将最新css特性转换为浏览器识别的样式
