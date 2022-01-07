const message: string = "你好呀";
const foo=(title: string)=> {
  console.log(title);
}
const p=new Promise((resolve,reject)=>{
    console.log(1);
    
})//需要垫片来解析promise
foo(message);
export {}
