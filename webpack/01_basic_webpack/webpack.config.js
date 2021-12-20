
const path=require('path')
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js'//给被打包成功的文件取名字
    }
}
// 要用module.exports导出 因为webpack是基于node环境
// path模块下有resolve函数，两个参数，__dirname会获取当前文件所在的路经