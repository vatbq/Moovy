import thunk from 'redux-thunk';
import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import moviesReducer from './reducers/movies-reducer';
import userReducer from './reducers/user-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const storeEnhancers = composeWithDevTools(
  applyMiddleware(thunk),
);

export const reducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
});

export default createStore(
  reducer,
  {},
  storeEnhancers,
);
