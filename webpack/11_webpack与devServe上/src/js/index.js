const message = "你好呀";
const foo = (title) => {
  console.log(title);
};
const p = new Promise((resolve, reject) => {
  console.log(4);
}); //需要垫片来解析promise
foo(123);
