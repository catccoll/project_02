
// 异步loader
module.exports=function(content){
    console.log('=============','1');
const callback=this.async()
    setTimeout(()=>{
        callback(null,content)
    },2000)
}



// 同步loader
// module.exports=function(content){
//     console.log(content,'----------1');
//     // 同步的loader ，两种方法返回数据
//     // return content
//     // this.callback(null,content)
//     return content
// }