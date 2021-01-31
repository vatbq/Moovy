import React, { useMemo, useCallback } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { selectFavoriteMovies, selectAccountId, selectSessionId } from '../selectors/userSelector';
import { belongsToList, markFavorite, unMarkFavorite } from '../api/userServices';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../actions/user-actions';

const useStyles = makeStyles(() => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    padding: 0,
    backgroundColor: 'transparent',

    '&:hover': {
      fontWeight: '500px',
    }
  },

  actionIcon: {
    fontSize: ({ fontSize }) => fontSize,
    marginRight: '5px',

    '&:hover': {
      fontSize: 'default',
    },
  },

}));

const SaveAsFavoriteButton = ({ movie, fontSize = 'default', showText = true }) => {
  const classes = useStyles({ fontSize });
  const favoriteMovies = useSelector(selectFavoriteMovies);
  const sessionId = useSelector(selectSessionId);
  const accountId = useSelector(selectAccountId);
  const dispatch = useDispatch();

  const favorite = useMemo(() => belongsToList(favoriteMovies, movie.id), [favoriteMovies, movie]);

  const removeMovieFromFavorites = useCallback(async () => {
    await unMarkFavorite(accountId, sessionId, movie.id);
    dispatch(removeFavoriteMovie(movie));
  }, [movie, accountId, sessionId, dispatch])

  const addMovieFromFavorites = useCallback(async () => {
    await markFavorite(accountId, sessionId, movie.id);
    dispatch(addFavoriteMovie(movie));
  }, [movie, accountId, sessionId, dispatch])

  const handleOnClick = useCallback(() => favorite ? removeMovieFromFavorites() : addMovieFromFavorites(), [favorite, removeMovieFromFavorites, addMovieFromFavorites]);

  return (
    <Button className={classes.button} onClick={handleOnClick}>
      {favorite ?
        <FavoriteIcon className={classes.actionIcon} /> :
        <FavoriteBorderIcon className={classes.actionIcon} />}
      {showText && <span>Save Movie</span>}
    </Button>
  )
}

export default SaveAsFavoriteButton;