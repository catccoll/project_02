import "core-js/stable";
import "regenerator-runtime/runtime";//entry polyfill
import "./js/index.js";
import "./vue/index";
const { priceFormat } = require("./js/format");
import "./js/element";
import './js/react_main.js'
console.log(priceFormat());

if (module.hot) {
  module.hot.accept("./js/index.js", () => {
    console.log("index.js发生了更新");
  });
}
