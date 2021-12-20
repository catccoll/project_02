/**
 * resolve参数
 * 1.>普通的值或对象
 * 2.传入一个promise 那么当前的promise的状态由传入的promise来决定
 * 3.传入一个对象，这个兑现有then方法,那么当前的promise的状态也是有传入的promise来决定。也会执行该方法的then
 */
// 2.传入promise的特殊情况
const newPromise = new Promise((resolve, reject) => {
  resolve("aaa");
});

new Promise((resolve, reject) => {
  //   resolve("resolve message");
  resolve(newPromise);
}).then(
  (res) => {
    console.log(res);///aaa
  },
  (err) => {
    console.log(err);
  }
);

//3. 传入一个对象，这个兑现有then方法
new Promise((resolve, reject) => {
  //   resolve("resolve message");
  const obj = {
    then: function (resolve, reject) {
      resolve("bbb");
    },
  };
  resolve(obj);
}).then(
  (res) => {
    console.log(res);//bbb
  },
  (err) => {
    console.log(err);
  }
);
