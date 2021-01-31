import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const STARS = [2, 4, 6, 8, 10];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },

  blankStar: {
    fontSize: ({ fontSize }) => fontSize,
  },

  coloredStar: {
    fontSize: ({ fontSize }) => fontSize,
    color: '#ffff00',
  },
}));

const FullStar = ({ fontSize }) => {
  const classes = useStyles({ fontSize });

  return <StarRoundedIcon className={classes.coloredStar} />;
};

const HalfStar = ({ fontSize }) => {
  const classes = useStyles({ fontSize });

  return <StarHalfIcon className={classes.coloredStar} />;
};

const EmptyStar = ({ fontSize }) => {
  const classes = useStyles({ fontSize });

  return <StarRoundedIcon className={classes.blankStar} />;
};

const Stars = ({ vote_average, fontSize = 'default' }) => {
  const classes = useStyles({ fontSize });

  return (
    <div className={classes.root}>
      {STARS.map((value) => (
        vote_average >= value
          ? <FullStar key={value} fontSize={fontSize} />
          : vote_average + 1 > value
            ? <HalfStar key={value} fontSize={fontSize} />
            : <EmptyStar key={value} fontSize={fontSize} />
      ))}
    </div>
  );
};

export default Stars;
