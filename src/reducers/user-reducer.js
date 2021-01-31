import {
  UPDATE_USER,
  SET_USER,
  SET_SESSION,
  SET_ACCOUNT,
  FAVORITES_MOVIES_REQUESTED,
  FAVORITES_MOVIES_RECEIVED,
  ADD_MOVIE_TO_FAVORITES,
  REMOVE_MOVIE_FROM_FAVORITES,
  WATCH_LIST_REQUESTED,
  WATCH_LIST_RECEIVED,
  ADD_MOVIE_TO_WATCHED,
  REMOVE_MOVIE_FROM_WATCHED
} from '../actions/user-actions';

import { PENDING, FULFILLED } from '../lib/constants';

export const initialState = {
  favoriteList: [], watchList: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, ...payload };
    case UPDATE_USER:
      return { ...state, ...payload };
    case SET_SESSION:
      return { ...state, ...payload };
    case SET_ACCOUNT:
      return { ...state, ...payload };
    case FAVORITES_MOVIES_REQUESTED:
      return { ...state, favoriteStatus: PENDING };
    case FAVORITES_MOVIES_RECEIVED:
      return { ...state, ...payload, favoriteStatus: FULFILLED };
    case ADD_MOVIE_TO_FAVORITES:
      return { ...state, favoriteList: addMovieToList(state.favoriteList, payload.movie) };
    case REMOVE_MOVIE_FROM_FAVORITES:
      return { ...state, favoriteList: removeMovieFromList(state.favoriteList, payload.movie) };
    case WATCH_LIST_REQUESTED:
      return { ...state, watchListStatus: PENDING };
    case WATCH_LIST_RECEIVED:
      return { ...state, ...payload, watchListStatus: FULFILLED };
    case ADD_MOVIE_TO_WATCHED:
      return { ...state, watchList: addMovieToList(state.watchList, payload.movie) };
    case REMOVE_MOVIE_FROM_WATCHED:
      return { ...state, watchList: removeMovieFromList(state.watchList, payload.movie) };
    default:
      return state;
  }
};

const addMovieToList = (list, movie) => {
  return [...list, movie];
}

const removeMovieFromList = (list, movie) => {
  return list.filter(currentMovie => currentMovie.id !== movie.id);
}