function foo() {
  return new Promise((resolve, reject) => {
    //   resolve()
    reject();
  });
}
const fooPromise = foo();
// then方法传入的回调函数，会在Promise执行resolve函数时，被回调
fooPromise.then(() => {});
// catch方法传入的回调函数，会在promise执行reject时，被回调
fooPromise.catch(() => {});

class Person {
  constructor(callback) {
    this.foo = function () {
      console.log("foo");
    };
    this.bar = function () {
      console.log("bar");
    };
    callback(this.foo, this.bar);
  }
}

const p = new Person((foo, bar) => {
  foo();
  bar();
});

// 被传入的callback被称之为executor
// >resolve 回调函数  ，在成功时，会回调resolve函数
//  >reject  回调函数，在失败的时候，回调reject函数
const promise = new Person((resolve, reject) => {
  resolve();
});

// 因为是承诺 所以  resolve 一定会调用.then后面的方法   reject一定会调用.catch方法
