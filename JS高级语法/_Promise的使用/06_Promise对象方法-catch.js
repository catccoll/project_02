const promise = new Promise((resolve, reject) => {
  reject("rejected");
  //  throw new Error('reject')
});
//  promise.then(null,(err=>{
//      console.log(err);
//  }))

promise.then((res) => {
  console.log(res);
});
promise.catch((err) => {
  console.log(err);
});
