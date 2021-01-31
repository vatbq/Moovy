import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getMovie, getMovieTrailer } from '../api/moviesServices';
import Loading from './Loading';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    zIndex: -99,
  },

  trailer: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100% !important',
    height: '100% !important',
  },

  title: {
    color: '#ffffff',
    marginTop: '70px',
  },
}));

const MovieTrailer = () => {
  const classes = useStyles();
  const [trailerKey, setTrailerKey] = useState(null);
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(params.id);
      setMovie(movieData);
    };

    fetchMovie();
  }, [params.id]);

  useEffect(() => {
    const fetchMovieKey = async () => {
      const trailer = await getMovieTrailer(params.id);
      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        setLoadingTrailer(true);
      }
    };

    fetchMovieKey();
  }, [params.id]);

  if (loadingTrailer || !movie) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <iframe
        className={classes.trailer}
        src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1`}
        title={movie.name}
        allow="autoplay;"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};

export default MovieTrailer;
