import axios from "axios";
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_RECOMMEND,
  CHANGE_BANNERS,
} from "./constants";
// 要加括号
export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});
export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});
export const incAction = () => ({
  type: INCREMENT,
});
export const decAction = () => ({
  type: DECREMENT,
});
export const changeRecommend = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend,
});
export const changeBanners = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

// redux-thunk中定义的action函数，一旦传入这个函数 就会被主动的调用 所以在那里不能加括号，小心，不是我们自己调用，而是系统自己调用，我们调用就报错了
export const recommendAxios = (dispatch) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    dispatch(changeRecommend(res.data.data.banner.list));
    dispatch(changeBanners(res.data.data.recommend.list));
  });
};
