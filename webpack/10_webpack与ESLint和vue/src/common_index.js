import "core-js/stable";
import "regenerator-runtime/runtime";
import "./js/index.js";
import './vue/index'
const { priceFormat } = require("./js/format");
import "./js/element";
console.log(priceFormat());
