var name = '小明'
var age = 18
var flag = true
function sum(num1, num2) {
    return num1 + num2
}
if (flag) {
    console.log(sum(20, 30));
}
// 导出方式一：
export {
    flag, sum
}


// 导出方式二：
export var num1 = 1000
export var height = 1.88



// 3.导出函数/类
export function fn(num1, num2) {
    return num1 * num2
}
export class Person {
    run() {
        console.log('在奔跑');
    }
}


// 4.export default
// const address = '北京市'
// export default address  //只能用default导出一个
export default function () {
    console.log(222);
}
