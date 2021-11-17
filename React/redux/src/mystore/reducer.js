/**
 *
 */
import { INCREMENT1, DECREMENT1, MULTIPLY1, ASYNC } from "./constant";
const initialState = {
  counter: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // 因为这里有了return  所以这里不需要再后面加break  匹配到了就停止
    case INCREMENT1:
      return { ...state, counter: state.counter + action.data };
    case DECREMENT1:
      return { ...state, counter: state.counter - action.data };
    case MULTIPLY1:
      return { ...state, counter: state.counter * action.data };
    case ASYNC:
      return { ...state, counter: state.counter / action.data };
    default:
      // 这个default 要写return state 初始化的时候把初始化的值返回出去
      return state;
  }
}
