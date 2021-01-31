import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';

import { useSelector, useDispatch } from 'react-redux';
import MovieListReduxHooks from './MovieListReduxHooks';
import MovieListUser from './MovieListUser';
import HomeMovie from '../HomeMovie';
import {
  LISTS, PENDING, EMPTY, FULFILLED, USER_LISTS
} from '../../lib/constants';
import { getGenres } from '../../api/moviesServices';

import { loadMovies } from '../../actions/movies-actions';

import { selectMoviesList, selectMoviesStatus } from '../../selectors/moviesSelector';
import { selectFavoriteListStatus, selectwatchListStatus } from '../../selectors/userSelector';
import { selectFavoriteMovies, selectWatchListMovies } from '../../selectors/userSelector';

const useStyles = makeStyles(() => ({
  lists: {
    padding: '0px 30px 50px 30px',
  },

  loadingContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    color: '#ffffff',
  },
}));

const HomeReduxHooks = () => {
  const classes = useStyles();
  const [allGenres, setAllGenres] = useState([]);
  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const moviesList = useSelector(selectMoviesList);
  const favoriteListStatus = useSelector(selectFavoriteListStatus);
  const watchedListStatus = useSelector(selectwatchListStatus);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();
      setAllGenres(genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (moviesStatus === EMPTY) {
      dispatch(loadMovies());
    }
  }, [moviesStatus, dispatch]);

  const getUserListStatus = (listName) => {
    switch (listName) {
      case 'Favorite List':
        return favoriteListStatus;
      case 'Watch List':
        return watchedListStatus;
      default:
        break;
    }
  }

  const getUserListSelector = (listName) => {
    switch (listName) {
      case 'Favorite List':
        return selectFavoriteMovies;
      case 'Watch List':
        return selectWatchListMovies;
      default:
        break;
    }
  }

  if (moviesStatus === PENDING || moviesStatus === EMPTY ||
    favoriteListStatus === PENDING || watchedListStatus === PENDING) {
    return (
      <div className={classes.loadingContainer}>
        <h1 className={classes.loadingText}>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <HomeMovie />
      <div className={classes.lists}>
        {
          USER_LISTS.map((list) => (
            isAuthenticated && getUserListStatus(list) === FULFILLED &&
            <MovieListUser
              key={list}
              listName={list}
              allGenres={allGenres}
              selector={getUserListSelector(list)}
            />
          ))
        }
        {LISTS.map((list) => (
          moviesList[list.key].status === FULFILLED)
          && (
            <MovieListReduxHooks
              key={list.key}
              listKey={list.key}
              listName={list.label}
              allGenres={allGenres}
            />
          )
        )}
      </div>
    </>
  );
};

export default HomeReduxHooks;
