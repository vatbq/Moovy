import React from 'react';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    textDecoration: 'none',

    '&:hover': {
      fontWeight: '500px',
    },
  },

  actionIcon: {
    fontSize: ({ fontSize }) => fontSize,
    marginRight: '5px',

    '&:hover': {
      fontSize: 'default',
    },
  },

}));

const WatchTrailerButton = ({ movieId, fontSize = 'default', showText = true }) => {
  const classes = useStyles({ fontSize });

  return (
    <Link to={`/movies/${movieId}`} className={classes.link}>
      <PlayCircleFilledWhiteRoundedIcon className={classes.actionIcon} />
      {showText && <span>Watch Trailer</span>}
    </Link>
  );
};

export default WatchTrailerButton;
