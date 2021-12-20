import { Map } from "immutable";
import {
  CHANGE_SONGS_DETAIL,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
} from "./constants";
const defaultState = Map({
  currentSongs: {},
  playList: [],
  currentSongIndex: 0,
});
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case CHANGE_SONGS_DETAIL:
      return state.set("currentSongs", actions.songsDetail);
    case CHANGE_PLAY_LIST:
      return state.set("playList", actions.playList);
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", actions.index);
    default:
      return state;
  }
}
export default reducer;
