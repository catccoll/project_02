// function foo(){
//     // '承诺'  new Promise
//     return  new Promise()
// }
class Person {
  constructor(callback) {
      let foo =function(){

      }
      let bar =function(){

      }
      callback(foo,bar)
  }
}
const p= new Person((foo,bar)=>{
    foo()
    bar()
})

// >resolve 成功时，回调resolve函数
// >reject：在失败时，回调reject函数
const chengnuo = new Promise((resolve,reject)=>{
  
});
// then方法传入的回调函数，会在Promise执行resolve函数时，被回调
// catch方法传入的回调函数，会在Promise执行resolve函数时，被回调