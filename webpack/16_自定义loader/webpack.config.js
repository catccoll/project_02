const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/[hash:2].bundle.js",
  },
  module: {
    rules: [
      //   {
      //     test: /\.js$/,
      //     use: ["sai-loader2.js"],
      //   },
      //   {
      //     test: /\.js$/,
      //     use: [
      //       {
      //         loader: "sai-loader.js",
      //       },
      //     ],
      //     enforce: "pre", //改变loader的执行顺序，pre最先执行，然后是normal，inline、post  pitch-loader是相反的
      //   },
      //   {
      //     test: /\.js$/,
      //     use: ["sai-loader3.js"],
      //   },
      {
        test: /\.js$/,
        use: 
          {
            loader: "sai-babel",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "sai-loader"], //默认是node_modules
  },
  plugins: [new CleanWebpackPlugin()],
};
