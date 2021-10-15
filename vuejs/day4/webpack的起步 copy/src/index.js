// 1.使用commonjs的模块化规范
const { add, sub } = require("../src/mathUtil.js")
console.log(add(1, 2));
console.log(sub(2, 1));
// 1.使用ES6的模块化规范
import { height, age, name } from "../src/info.js"
console.log(name);
console.log(height);
console.log(age);
// 3.依赖css文件
require("../src/css/normal.css")
// 4.依赖less文件
