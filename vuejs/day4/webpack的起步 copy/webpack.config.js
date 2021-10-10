const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),   //动态获取路经
        filename: 'bundle.js'
    },
}
// bundle(包)