import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_NEW_ALBUM,
  CHANGE_TO_RECOMMEND_RANKING1,
  CHANGE_TO_RECOMMEND_RANKING2,
  CHANGE_TO_RECOMMEND_RANKING3,
} from "./constant";
import {
  recommend,
  getHotRecommends,
  getNewAlbum,
  getRecommendRanking,
} from "../../../../../services/recommend";
export const RequestBanner = (banners) => ({
  type: CHANGE_TOP_BANNERS,
  banners,
});

export const AxiosBanner = () => {
  return (dispatch) => {
    recommend.then((res) => {
      dispatch(RequestBanner(res.banners));
    });
  };
};

export const HotRecommend = (hotRecommend) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommend,
});

export const HotRecommendAxios = () => {
  return (dispatch) => {
    getHotRecommends().then((res) => {
      dispatch(HotRecommend(res.result));
    });
  };
};
export const TopNewAlbum = (topNewAlbum) => ({
  type: CHANGE_TOP_NEW_ALBUM,
  topNewAlbum,
});

export const TopAlbumAxios = () => {
  return (dispatch) => {
    getNewAlbum().then((res) => {
      dispatch(TopNewAlbum(res.albums));
    });
  };
};

export const RecommendRanking1 = (recommendRanking) => ({
  type: CHANGE_TO_RECOMMEND_RANKING1,
  recommendRanking,
});
export const RecommendRanking2 = (recommendRanking) => ({
  type: CHANGE_TO_RECOMMEND_RANKING2,
  recommendRanking,
});

export const RecommendRanking3 = (recommendRanking) => ({
  type: CHANGE_TO_RECOMMEND_RANKING3,
  recommendRanking,
});

export const RecommendRankingAxios = (idx) => {
  return (dispatch) => {
    switch (idx) {
      case 0:
        getRecommendRanking(0).then((res) => {
          dispatch(RecommendRanking1(res.playlist));
        });
        break;
      case 2:
        getRecommendRanking(2).then((res) => {
          dispatch(RecommendRanking2(res.playlist));
        });
        break;
      case 3:
        getRecommendRanking(3).then((res) => {
          dispatch(RecommendRanking3(res.playlist));
        });
        break;
      default:
        break;
    }
  };
};
