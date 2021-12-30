import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import sagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
const createSaga = sagaMiddleware();
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
// thunk中间件
// const storeEnhance = applyMiddleware(thunkMiddleware);
// saga中间件
const storeEnhance = applyMiddleware(createSaga);

const store = createStore(reducer, composeEnhancers(storeEnhance));
createSaga.run(rootSaga);
export default store;
