import _ from "lodash";
import dayjs from "dayjs";
// 只要是异步导入的代码，webpack都会进行分离
// magic comments
import(/*webpackChunkName:'test'*/ "./test").then((res) => {
  console.log(res);
});
console.log(dayjs());
console.log(1);
console.log(_.join("c", "d"));
const button = document.createElement("button");
button.innerHTML = "加载内容";
button.addEventListener("click", () => {
  import(
    /*webpackChunkName:'sync'*/

    /*webpackPreload:true*/
    "./sync.js"
  );
});
// webpackPrefetch:true (预获取) 这个是为了优化懒加载，提前下载好文件，这样用户体验效果好，这个是浏览器闲置时下载，一般使用这个
//webpackPreload:true (预加载)效果和Prefetch差不多，下载的是伴随着父chunk一起下载，是立即下载
document.body.appendChild(button);
