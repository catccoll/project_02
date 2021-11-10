const CracoLessPlugin = require('craco-less');
// const path=require('path ')
//  const resolve=dir=>path.resolve(__dirname,dir)
module.exports = {
    // 配置插件的颜色主体
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#1DA57A' },
              javascriptEnabled: true,
            },
          },
        },
      },
   
    ],
    // 配置别名
    // webpack:{
    //     alias:{
    //         '@':resolve('src'),
    //         'components':resolve('src/components')
    //     }
    // }
  };