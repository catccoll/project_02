// 使用immutable优化后的写法

import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_NEW_ALBUM,
  CHANGE_TO_RECOMMEND_RANKING1,
  CHANGE_TO_RECOMMEND_RANKING2,
  CHANGE_TO_RECOMMEND_RANKING3,
} from "./constant";
import { Map } from "immutable";

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  topNewAlbum: [],
  recommendRanking1: {},
  recommendRanking2: {},
  recommendRanking3: {},
});
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", actions.banners); // { ...state, topBanners: actions.banners };
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", actions.hotRecommend);
    case CHANGE_TOP_NEW_ALBUM:
      return state.set("topNewAlbum", actions.topNewAlbum);
    case CHANGE_TO_RECOMMEND_RANKING1:
      return state.set("recommendRanking1", actions.recommendRanking);
    case CHANGE_TO_RECOMMEND_RANKING2:
      return state.set("recommendRanking2", actions.recommendRanking);
    case CHANGE_TO_RECOMMEND_RANKING3:
      return state.set("recommendRanking3", actions.recommendRanking);
    default:
      return state;
  }
}
export default reducer;

// 为什么要进行这样的优化呢，是因为你虽然边变量发生了变化，但是你每次都这样使用扩展运算符，创建新的对象，这样很是浪费内存如果在你需要管理数据的数据很庞大的情况下，使用map进行优化，这样即使你变量发生了变化，然后return出来的新的对象会尽可能的复用原来的属性，这样就节约了内存，这里进行了优化，combineReducer引入的路经也要发生改变，且在你组件里面得到的数据方式也会发生改变
// 未优化的版本
// import { CHANGE_TOP_BANNERS } from "./constant";

// const defaultState = {
//   topBanners: [],
// };
// function reducer(state = defaultState, actions) {
//   switch (actions.type) {
//     case CHANGE_TOP_BANNERS:
//       return { ...state, topBanners: actions.banners };
//     default:
//       return state;
//   }
// }
// export default reducer;
