// then方法是promise对象上的一个方法，他其实是放在Promise的原型上的Promise.prototype.then上
// class Person {
//   constructor(executor) {
//     const resolve = () => {
//     this.callback('123')
//     }
//     const reject=()=>{
//         this.callback1()
//     }
//     executor(resolve,reject)
//   }                      //伪代码
//   then(callback) {
//       this.callback=callback
//   }
//   catch(callback1){
//       this.callback1=callback1
//   }
// }
//   const promise=new Person((resolve,reject)=>{
//     resolve()
//   }).then((res)=>{
//       console.log(res);
//   })

// function Promise(){

// }
// Promise.prototype.then()
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时，所有的then方法传入的回调函数都会被调用
const promise = new Promise((resolve, reject) => {
  resolve("123");
});
promise.then((res) => {
  console.log(res, "result");
});
console.log("---------------------------");
promise.then((res) => {
  console.log(res, "result1");
});
console.log("---------------------------");
// 2.then方法传入的'回调函数'，可以有返回值
// 1.如果我们返回的是一个普通值,那么这个普通的值被作为一个新的promise的resolve的值
//
promise
  .then((res) => {
    // 这个对象相当于被这样操作  new Promise((resolve,reject)=>{resolve({name:'why})})
    console.log(res);
    return { name: "why" };
  })
  .then((res) => {
    console.log(res);
  });
console.log("---------------------------");
// 返回的是一个new Promise
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("返回值是一个Promise");
      }, 3000);
    });
  })
  .then((res) => {
    console.log(res);
  });
  console.log('-------------------------------');
promise.then(res=>{
    return {
        then:function(resolve,reject){
            resolve('返回的是一个对象')
        }
    }
}).then(res=>{
    console.log(res);
})