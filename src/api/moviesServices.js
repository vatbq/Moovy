import connection from './connection';
import { LISTS } from '../lib/constants';

const getPopular = async () => {
  const response = await connection.get('movie/popular');
  return response.data.results;
};

const getTopRated = async () => {
  const response = await connection.get('movie/top_rated');
  return response.data.results;
};

const trending = async () => {
  const response = await connection.get('trending/all/day?');
  return response.data.results;
};

export const fetchMovies = (listName) => {
  switch (listName) {
    case 'popular':
      return getPopular;
    case 'topRated':
      return getTopRated;
    case 'trending':
      return trending;
    default:
      return null;
  }
};

export const getMovie = async (movieId) => {
  const response = await connection.get(`movie/${movieId}`);
  return response.data;
};

export const getHomePoster = async () => {
  const trends = await trending();
  const topTrendingMovie = trends.filter((movie) => movie.media_type === 'movie')[0];
  return getMovie(topTrendingMovie.id);
};

export const getAllList = async () => {
  const promises = LISTS.map((item) => fetchMovies(item.key)());
  return Promise.allSettled(promises);
};

export const getGenres = async () => {
  const response = await connection.get('/genre/movie/list');
  return response.data.genres;
};

export const getMovieTrailer = async (movieId) => {
  const response = await connection.get(`movie/${movieId}/videos`);
  return response.data.results[0];
};
