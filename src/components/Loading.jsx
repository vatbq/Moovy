import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.text}>Loading...</h1>
    </div>
  );
};

export default Loading;
