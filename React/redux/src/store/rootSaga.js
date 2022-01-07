import { takeEvery, put, call,  } from "redux-saga/effects";
import { CHANGE_RECOMMEND, CHANGE_BANNERS } from "./constants";
import axios from "axios";
function* rootSaga() {
  yield takeEvery("GET_RECOMMEND", getRecommend);
  // yield takeEvery('GET_BANNERS',getBanners)
}

function* getRecommend() {
  let res = yield call(axios.get, "http://123.207.32.32:8000/home/multidata");
  const banners = res.data.data.recommend.list;
  const recommend = res.data.data.banner.list;

  yield put({ type: CHANGE_RECOMMEND, recommend });
  yield put({ type: CHANGE_BANNERS, banners });
}
export default rootSaga;
