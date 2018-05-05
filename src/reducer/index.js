import { combineReducers } from 'redux';
import songs from "./playlistReducer";
import song from "./playerReducer";

const rootReducer = combineReducers({
  songs,
  song
});

export default rootReducer;
