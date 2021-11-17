import { applyMiddleware, createStore,compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose
// 应用一些中间件
const storeEnhance = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhance));

export default store;
