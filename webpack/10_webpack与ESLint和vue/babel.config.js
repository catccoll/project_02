module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        //将js语法转化为浏览器能识别的语法
        // 三个值:false(不使用任何的polyfill相关的代码)/usage(代码中需要哪些polyfill，就引用相关的api,按需导入)/entry(就是导入全部的polyfill，但是这个需要在入口文件导入core-js/stable,generator-runtime)
        // useBuiltIns:false
        // useBuiltIns:'usage',
        // corejs:3//默认情况下使用corejs的2版本，但是我们下的时候是3的版本，所以要指定corejs 3的版本
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    ["@babel/preset-react"], //编译JSX语法
    ["@babel/preset-typescript"], //编译ts文件
  ],
};

// polyfill 打补丁，比如我们new了一个promise，但是打包过后的代码还是new promise，那肯定低版本浏览器就识别不了  这个promise是哪里来的，根本没有构造过这么一个类，因为这是一个api，所以我们要polyfill一下
