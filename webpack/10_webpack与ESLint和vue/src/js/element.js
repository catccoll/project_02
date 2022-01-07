const divEl = document.createElement("div");

divEl.className = "title";
divEl.innerHTML = "你好呀";

document.body.appendChild(divEl);
const foo = new Promise((resolve, reject) => {
  resolve("你好");
});
 n  