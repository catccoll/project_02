import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
} from "./constants";
import { combineReducers } from "redux";

// 进阶做法
// 拆分counterReducer
const initialCounterState = {
  counter: 0,
};
function counterReducer(state = initialCounterState, actions) {
  switch (actions.type) {
    case SUB_NUMBER:
      return { ...state, counter: state.counter - actions.num };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + actions.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
// 拆分homeReducer
const initialHomeState = {
  banners: [],
  recommend: [],
};
function homeReducer(state = initialHomeState, actions) {
  switch (actions.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: actions.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommend: actions.recommend };
    default:
      return state;
  }
}
// 空的对象去取counterInfo是undefined，因为是undefined，所以会用上面的默认值，initialCounterInfo
// 所以state这里的默认值必须是空的对象，不能是其他的
// 
// function reducer(state ={}, actions) {
//   console.log(state);
//   return {
//     counterInfo:counterReducer(state.counterInfo,actions),
//     homeInfo:homeReducer(state.homeInfo,actions)
//   }
// }

// API做法合并reducer，这个api的好处就是state里面的值不发生改变 就不return，提高性能，上面的做法就是不改变值也会return出来
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
});
export default reducer;

// import {"abc"  as "bcd" } from '123'
// 这个as 就相当于取名字



// 一般做法

// const initialState = {
//   counter: 0,
//   banners: [],
//   recommend: [],
// };
// function reducer(state=initialState, actions) {
//   switch (actions.type) {
//     case SUB_NUMBER:
//       return { ...state, counter: state.counter - actions.num };
//     case ADD_NUMBER:
//       return { ...state, counter: state.counter + actions.num };
//     case INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//     case DECREMENT:
//       return { ...state, counter: state.counter - 1 };
//       case CHANGE_BANNERS:
//         return { ...state, banners: actions.banners };
//       case CHANGE_RECOMMEND:
//         return { ...state, recommend: actions.recommend };
//       default:
//       return state;
//   }
// }
