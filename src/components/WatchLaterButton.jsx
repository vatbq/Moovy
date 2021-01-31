import React, { useMemo, useCallback } from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { selectAccountId, selectSessionId, selectWatchListMovies } from '../selectors/userSelector';
import { belongsToList, saveMovie, removeSavedMovie } from '../api/userServices';
import { useSelector, useDispatch } from 'react-redux';
import { addWatchedMovie, removeWatchedMovie } from '../actions/user-actions';

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

const WatchLaterButton = ({ movie, fontSize = 'default', showText = true }) => {
  const classes = useStyles({ fontSize });
  const watchListMovies = useSelector(selectWatchListMovies);
  const sessionId = useSelector(selectSessionId);
  const accountId = useSelector(selectAccountId);
  const dispatch = useDispatch();

  const saved = useMemo(() => belongsToList(watchListMovies, movie.id), [watchListMovies, movie]);

  const removeMovieFromWatchList = useCallback(async () => {
    await removeSavedMovie(accountId, sessionId, movie.id);
    dispatch(removeWatchedMovie(movie));
  }, [movie, accountId, sessionId, dispatch])

  const addMovieFromWatchList = useCallback(async () => {
    await saveMovie(accountId, sessionId, movie.id);
    dispatch(addWatchedMovie(movie));
  }, [movie, accountId, sessionId, dispatch])

  const handleOnClick = useCallback(() => saved ? removeMovieFromWatchList() : addMovieFromWatchList(),
    [saved, removeMovieFromWatchList, addMovieFromWatchList]);

  return (
    <Button data-testid='watchLaterButton' className={classes.button} onClick={handleOnClick}>
      {saved ?
        <BookmarkIcon className={classes.actionIcon} /> :
        <BookmarkBorderIcon className={classes.actionIcon} />}
      {showText && <span>Save Movie</span>}
    </Button>
  )
}

export default WatchLaterButton;