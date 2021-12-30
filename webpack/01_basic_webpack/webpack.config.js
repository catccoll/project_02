const path=require('path')

module.exports={
 entry:'./src/main.js',
 output:{
     path:path.resolve(__dirname,'./abc'),
     filename:'bundle.js'
 }
}
// 要用module.exports导出 因为webpack是基于node环境
// path模块下有resolve函数，两个参数，__dirname会获取当前文件所在的路经
// 当你敲webpack命令的时候，会默认去src下面的index当做入口文件，所以可以在webpack.config.hs下面去设置

// 项目运行 --save
// 开发时依赖  --save-dev

// 执行本地命令的两种方式
// 1.npx 会执行node_modules下面的命令  也就是本地命令
// 2.在webpack中进行设置
module.exports={
    entry:'./src/main.js',
    output:{
  path:path.resolve(__dirname,'./abc'),
  filename:'abc.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[]
            }
        ]
    }
}