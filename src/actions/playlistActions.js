import * as types from "./actionTypes";
import PlaylistApi from "../api/playlistApi";

export function loadSongs(songs) {
  return {
    type: types.LOAD_SONGS_SUCCESS,
    songs
  };
}

export function playSong(song) {
  return {
    type: types.PLAY_SONG,
    song
  };
}

export function fetchSongs() {
  return function(dispatch) {
    return PlaylistApi.getSongs().then(songs => {
      dispatch(loadSongs(songs));
    });
  };
}

