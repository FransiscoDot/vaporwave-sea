import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function audioPlayer(state = initialState.audioPlayer, action) {
  switch(action.type) {
    case types.PLAY_SONG:
      return {
        ...state,
        song: action.song,
        status: "PLAYING"
      };

    case types.PAUSE_SONG:
      return {
        ...state,
        status: "PAUSED"
      };

    default:
      return state;
  }
}
