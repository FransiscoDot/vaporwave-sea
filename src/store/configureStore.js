import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from "../reducer/index";

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  )
}
