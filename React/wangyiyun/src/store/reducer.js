import { combineReducers } from "redux-immutable";
// import { combineReducers } from "redux";
// 这个是未进行优化的
// 这里引入combineReducers的路经发生了变化
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store/index";
import {reducer as playReducer} from '../pages/play/store/index'
// 给引进来的变量取名字  as
const cReducer = combineReducers({
  recommend: recommendReducer,
  player:playReducer
});
export default cReducer;
