const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //动态获 取路经
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            // css-loader只负责将css文件进行加载
            // style-loader负责将样式添加到DOM中
            // 使用多个loader时，是从右向左
            use: [ 'style-loader', 'css-loader','less-loader']
        }],
        // rules: [{
        //     test: /\.less$/,
        //     use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "less-loader" // compiles Less to CSS
        //     }]
        // }]
    }
}
    // bundle(包)