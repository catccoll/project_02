import { createStore,applyMiddleware } from "redux";
import reducer from './reducer.js'
// 引入redux-thunk  用于支持异步action
import thunk from 'redux-thunk'
const store =createStore(reducer,applyMiddleware(thunk))
export default store 