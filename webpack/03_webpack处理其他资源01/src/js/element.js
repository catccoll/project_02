const divEl = document.createElement("div");
// import "css-loader!../css/style.css";
import "../css/title.less";
import "../css/style.css";

divEl.className = "title";
divEl.innerHTML = "你好呀";
const img=new Image()
const img2=document.createElement('img')
img2.src=require('../img/2.jpg').default
img.src=  require('../img/bg.png').default
document.body.appendChild(divEl);
divEl.appendChild(img)
divEl.appendChild(img2)
