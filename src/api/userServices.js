import connection from './connection';

export const getUserAccount = async (session_id) => {
  const response = await connection.get('/account', { params: { session_id } });
  return response.data.id;
}

export const markFavorite = async (account_id, session_id, media_id) => {
  await toggleMovieFavorite(account_id, session_id, media_id, true);
}

export const unMarkFavorite = async (account_id, session_id, media_id) => {
  await toggleMovieFavorite(account_id, session_id, media_id, false);
}

const toggleMovieFavorite = async (account_id, session_id, media_id, favorite) => {
  await connection.post(`/account/${account_id}/favorite`,
    { media_id, media_type: 'movie', favorite }, { params: { session_id } })
}
export const belongsToList = (list, media_id) => {
  return list.some(movie => movie.id === media_id);
}

export const getFavoriteList = async (account_id, session_id) => {
  const response = await connection.get(`/account/${account_id}/favorite/movies`, { params: { session_id } });
  return response.data.results;
}

export const getWatchList = async (account_id, session_id) => {
  const response = await connection.get(`/account/${account_id}/watchlist/movies`, { params: { session_id } });
  return response.data.results;
}

export const saveMovie = async (account_id, session_id, media_id) => {
  await toggleSavedMovie(account_id, session_id, media_id, true);
}

export const removeSavedMovie = async (account_id, session_id, media_id) => {
  await toggleSavedMovie(account_id, session_id, media_id, false);
}

const toggleSavedMovie = async (account_id, session_id, media_id, watchlist) => {
  await connection.post(`/account/${account_id}/watchlist`,
    { media_id, media_type: 'movie', watchlist }, { params: { session_id } })
}