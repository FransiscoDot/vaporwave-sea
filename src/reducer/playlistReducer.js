import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function songs(state = initialState.songs, action) {
  switch(action.type) {
    case types.LOAD_SONGS_SUCCESS:
      return Object.assign([], action.songs.concat(state));

    default:
      return state;
  }
}
