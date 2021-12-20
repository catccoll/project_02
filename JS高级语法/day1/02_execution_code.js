var name = "why";
foo()
function foo(){
    console.log('foo');
    function bar (){
        console.log('bar');
    }
}


var num1 = 20;
var num2 = 30;
var result = num1 + num2;
console.log(result);
console.log(window);
/**
 * 1.代码被解析也就是执行之前（js代码通过parse模块转成AST树结构的过程中），v8引擎内部会帮我们在内存中创建一个全局对象GlobalObject(go)   这个对象里面有 setTimeOut,String,num1,num2,result等等全局变量
 * 2.运行代码
 *   2.1 v8为了执行代码，v8引擎内部会有一个执行上下文栈(函数调用栈)(Execution context)
 *   2.2.因为我们要   执行全局代码，为了全局代码能够正常执行，需要创建 全局执行上下文(全局代码需要被执行的时候才会创建)全局执行上下文会被放到执行上下文栈
 *   全局执行上下文被放入到执行上下文栈中里面包含两部分内容：
 第一部分：在代码执行前，在parser转成AST的过程中，会将全局定义的变量、函数等加入到GlobalObject中，
 全局执行上下文的v(variable)o就是创建的go
  但是并不会赋值； 这个过程也称之为变量的作用域提升（hoisting） 第二部分：在代码执行中，对变量赋值，或者执行其他的函数；
 */

// var GlobalObject = {
//   String: "类",
//   Number: "类",
//   window: GlobalObject,
//   name: undefined,
//   num1: undefined,
//   num2: undefined,
//   result: undefined,
// };
