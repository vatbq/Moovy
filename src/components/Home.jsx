import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MovieList from './MovieList';
import HomeMovie from './HomeMovie';
import { LISTS } from '../lib/constants';
import { fetchMovies, getGenres } from '../api/moviesServices';

const useStyles = makeStyles(() => ({
  lists: {
    padding: '0px 30px 50px 30px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();
      setAllGenres(genres);
    };

    fetchGenres();
  }, []);

  return (
    <>
      <HomeMovie />
      <div className={classes.lists}>
        {LISTS.map((list) => (
          <MovieList
            key={list.key}
            fetchMovies={fetchMovies(list.key)}
            listName={list.label}
            allGenres={allGenres}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
