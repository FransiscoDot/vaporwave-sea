import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function song(state = initialState.song, action) {
  switch(action.type) {
    case types.PLAY_SONG:
      return Object.assign({}, action.song);

    default:
      return state;
  }
}
