import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  button: {
    color: '#ffffff',
  },
}));

const LoginButton = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={() => loginWithRedirect()}
      >
        Login
    </Button>
    </div>
  );
};

export default LoginButton;
