// const promise = new Promise((resolve, reject) => {});

// promise.then(
//   (res) => {},
//   (err) => {}
// );
// promise还有状态的划分
// promise一旦确定下来，那么就是不可更改的
new Promise((resolve, reject) => {//pending状态(悬而未决的状态)
    console.log('222222222222222');
    resolve()
    console.log('+++++++++');
}).then(
    (res) => {console.log(res,'请求成功');},//fulfilled状态(已兑现的状态)
    (err) => {console.log(err,'请求失败');}//rejected(已拒绝状态)
  );