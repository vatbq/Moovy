import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: '15px',

    '&:hover': {
      background: 'none',
    }
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  const { logout } = useAuth0();

  return (
    <MenuItem>
      <Button
        className={classes.root}
        onClick={() => logout({
          returnTo: window.location.origin,
        })}
      >
        Log Out
      </Button>
    </MenuItem>
  );
};

export default LogoutButton;
