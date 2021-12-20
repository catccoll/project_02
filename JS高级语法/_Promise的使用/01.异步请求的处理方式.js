/**
 * 这种回调的方式有很多的弊端
 *1.如果是我们自己封装的异步处理函数，那么我们在封装的时候必须要自己设计好callback的名称，并且使用好
 *2.如果我们使用的是别人封装的异步处理函数或第三方库，那么我们必须去看别人的文档或者源码，才知道要怎么获取到结果
 */

// function request(url, successCallback, failCallback) {
//   setTimeout(() => {
//     if (url === "sai") {
//       let name = "哈哈";
//       successCallback(name);
//     } else {
//       let name = "嘻嘻";
//       failCallback(name);
//     }
//   }, 3000);
// }
// request(
//   "sai",
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
//  更好的方案 更加规范的  promise  承诺(规范好了所有的代码编写逻辑)

// 优化后的代码
function request1(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "sai") {
        let name = "哈哈";
        resolve(name);
      } else {
        let name = "嘻嘻";
        reject(name);
      }
    }, 1000);
  });
}
const result = request1("si");
result.then(
  (res) => {
    console.log(res);
  },
  (res) => {
    console.log(res);
  }
);
// .catch((res)=>{
//     console.log(res);
// });
