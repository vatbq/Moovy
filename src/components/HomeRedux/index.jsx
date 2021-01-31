import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import MovieListRedux from './MovieListRedux';
import HomeMovie from '../HomeMovie';
import {
  LISTS, PENDING, EMPTY, FULFILLED,
} from '../../lib/constants';
import { getGenres } from '../../api/moviesServices';

import { loadMovies } from '../../actions/movies-actions';

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

const HomeRedux = ({ onLoadMovies, moviesStatus, moviesList }) => {
  const classes = useStyles();
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();
      setAllGenres(genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (moviesStatus === EMPTY) {
      onLoadMovies();
    }
  }, [moviesStatus, onLoadMovies]);

  if (moviesStatus === PENDING || moviesStatus === EMPTY) {
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
        {LISTS.map((list) => (
          moviesList[list.key].status === FULFILLED
          && (
          <MovieListRedux
            key={list.key}
            listKey={list.key}
            listName={list.label}
            allGenres={allGenres}
          />
          )
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  moviesStatus: state.movies.generalStatus,
  moviesList: state.movies.lists,
});
const mapActionsToProps = (dispatch) => ({
  onLoadMovies: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapActionsToProps)(HomeRedux);
