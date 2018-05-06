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

export function resumeSong() {
  return {
    type: types.RESUME_SONG
  };
}

export function changeSong(song) {
  return {
    type: types.CHANGE_SONG,
    song
  };
}

export function pauseSong() {
  return {
    type: types.PAUSE_SONG
  };
}

export function volumeChange(volume) {
  return {
    type: types.VOLUME_CHANGE,
    volume
  };
}

export function positionChanged(position, duration) {
  return {
    type: types.POSITION_CHANGED,
    position,
    duration
  };
}

export function positionChangedFromSlider(position) {
  return {
    type: types.POSITION_CHANGED_FROM_SLIDER,
    position
  };
}

export function clearAudioPlayer() {
  return {
    type: types.CLEAR_AUDIO_PLAYER
  }
}

export function fetchSongs() {
  return function(dispatch) {
    return PlaylistApi.getSongs().then(songs => {
      dispatch(loadSongs(songs));
    });
  };
}

