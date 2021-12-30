const divEl = document.createElement("div");
// import "css-loader!../css/style.css";
import "../css/title.less";
import "../css/style.css";

divEl.className = "title";
divEl.innerHTML = "你好呀";
document.body.appendChild(divEl);
