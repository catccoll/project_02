// 1.导入的{}中定义的变量
import {
    flag, sum
} from "../JS/aaa.js"
if (flag) {
    console.log('小明的flag');
    console.log();
}


// 2.导入export直接定义的变量
import {
    num1, height
} from "../JS/aaa.js"
console.log(num1, height);



// 3.导入函数/类
import { fn, Person } from "../JS/aaa.js"
fn(1, 2)//这里为啥导不出来
const person = new Person()
person.run()




// 4.导入 export default
import add from "../JS/aaa.js"
// console.log(add);
add()

// 5.统一全部导入
// import {
//     flag, sum, num1, height, fn, Person
// } from "../JS/aaa.js"
import * as  aaa from "../JS/aaa.js"
// aaa相当于对象
console.log(aaa.height);