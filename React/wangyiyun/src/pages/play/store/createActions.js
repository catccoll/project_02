import {
  CHANGE_SONGS_DETAIL,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
} from "./constants";

import { getSongsDetail } from "../../../services/players";
const songDetail = (songsDetail) => ({
  type: CHANGE_SONGS_DETAIL,
  songsDetail,
});
const changePlayListAction = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList,
});
const changeCurrentSongIndexAction = (index) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  index,
});
export const getSongsDetailAxios = (ids) => {
  return (dispatch, getState) => {
    // //1. 根据id查找playList中是否已经有了该歌曲
    // const playList = getState().getIn(["player", "playList"]);
    // const songIndex = playList.findIndex((item) => item.id === ids);
    // // 2.判断是否找到歌曲
    // if(songIndex!==-1){
    //   // 找到歌曲
    // }
    getSongsDetail(ids).then((res) => {
      console.log(res);
      dispatch(songDetail(res.songs[0]));
    });
  };
};
