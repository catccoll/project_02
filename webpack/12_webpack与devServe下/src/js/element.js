const divEl = document.createElement("div");

divEl.className = "title";
divEl.innerHTML = "嘻嘻呵呵";

document.body.appendChild(divEl);
const foo = new Promise((resolve, reject) => {
  resolve("你好");
});

