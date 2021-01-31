import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const useStyles = makeStyles({
  listName: {
    color: '#ffffff',
  },

  carousel: {
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& .react-multi-carousel-item': {
      transition: 'all .5s ease',

      '&:hover': {
        zIndex: 1,
        transform: 'translate3D(0,-1px,0) scale(1.4)',
      },
    },
  },
});

const responsive = {
  ls: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  md: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
    slidesToSlide: 4,
  },
  s: {
    breakpoint: { max: 800, min: 550 },
    items: 3,
    slidesToSlide: 3,
  },
  xs: {
    breakpoint: { max: 550, min: 400 },
    items: 2,
    slidesToSlide: 2,
  },
  xxs: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const MovieList = ({ listName, fetchMovies, allGenres }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, [fetchMovies]);

  return (
    <>
      <h1 className={classes.listName}>{listName}</h1>
      <Carousel responsive={responsive} className={classes.carousel}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} allGenres={allGenres} />
        ))}
      </Carousel>
    </>
  );
};
export default MovieList;
