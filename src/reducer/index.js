import { combineReducers } from 'redux';
import songs from "./playlistReducer";
import audioPlayer from "./audioPlayerReducer";

const rootReducer = combineReducers({
  songs,
  audioPlayer
});

export default rootReducer;
