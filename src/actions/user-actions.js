import { getFavoriteList, getWatchList } from '../api/userServices';

export const UPDATE_USER = 'UPDATE_USER';
export const SET_USER = 'SET_USER';
export const SET_SESSION = 'SET_SESSION';
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const FAVORITES_MOVIES_REQUESTED = 'FAVORITES_MOVIES_REQUESTED';
export const FAVORITES_MOVIES_RECEIVED = 'FAVORITES_MOVIES_RECEIVED';
export const ADD_MOVIE_TO_FAVORITES = 'ADD_MOVIE_TO_FAVORITES';
export const REMOVE_MOVIE_FROM_FAVORITES = 'REMOVE_MOVIE_FROM_FAVORITES';
export const WATCH_LIST_REQUESTED = 'WATCH_LIST_REQUESTED';
export const WATCH_LIST_RECEIVED = 'WATCH_LIST_RECEIVED';
export const ADD_MOVIE_TO_WATCHED = 'ADD_MOVIE_TO_WATCHED';
export const REMOVE_MOVIE_FROM_WATCHED = 'REMOVE_MOVIE_FROM_WATCHED';

export const updateUser = (username) => {
  return {
    type: UPDATE_USER,
    payload: { username },
  }
}

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  }
}

export const setSession = (sessionId) => {
  return {
    type: SET_SESSION,
    payload: { sessionId },
  }
}

export const setAccount = (accountId) => {
  return {
    type: SET_ACCOUNT,
    payload: { accountId },
  }
}

export const setFavoriteList = (sessionId, accountId) => async (dispatch) => {
  dispatch({
    type: FAVORITES_MOVIES_REQUESTED
  });

  const favoriteList = await getFavoriteList(accountId, sessionId);
  dispatch(setFavoriteMovies(favoriteList));
};

const setFavoriteMovies = (favoriteList) => (
  {
    type: FAVORITES_MOVIES_RECEIVED,
    payload: { favoriteList }
  }
)

export const setWatchList = (sessionId, accountId) => async (dispatch) => {
  dispatch({
    type: WATCH_LIST_REQUESTED
  });

  const watchList = await getWatchList(accountId, sessionId);
  dispatch(setWatchedMovies(watchList));
};

const setWatchedMovies = (watchList) => (
  {
    type: WATCH_LIST_RECEIVED,
    payload: { watchList }
  }
)

export const addFavoriteMovie = (movie) => {
  return {
    type: ADD_MOVIE_TO_FAVORITES,
    payload: { movie }
  }
}

export const removeFavoriteMovie = (movie) => {
  return {
    type: REMOVE_MOVIE_FROM_FAVORITES,
    payload: { movie }
  }
}

export const addWatchedMovie = (movie) => {
  return {
    type: ADD_MOVIE_TO_WATCHED,
    payload: { movie }
  }
}

export const removeWatchedMovie = (movie) => {
  return {
    type: REMOVE_MOVIE_FROM_WATCHED,
    payload: { movie }
  }
}