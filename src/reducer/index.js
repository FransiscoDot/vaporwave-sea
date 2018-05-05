import { combineReducers } from 'redux';
import songs from "./playlistReducer";

const rootReducer = combineReducers({
  songs
});

export default rootReducer;
