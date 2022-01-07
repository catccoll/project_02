import "core-js/stable";
import "regenerator-runtime/runtime";
import "./js/index.js";
import "./vue/index";
const { priceFormat } = require("./js/format");
import "./js/element";

console.log(priceFormat());

if (module.hot) {
  module.hot.accept("./js/index.js", () => {
    console.log("index.js发生了更新");
  });
}
