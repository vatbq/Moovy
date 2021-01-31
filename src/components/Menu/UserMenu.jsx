import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import LogoutLink from '../LogoutLink';
import CollapsedMenu from './CollapsedMenu';

const useStyles = makeStyles((theme) => ({
  user: {
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

  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const UserMenu = () => {
  const { user } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.user}>
      <Avatar src={user.picture} className={classes.small} />
      <CollapsedMenu IconComponent={ArrowDropDownIcon}>
        <Link className={classes.link} to="/profile">
          <MenuItem>My Profile</MenuItem>
        </Link>
        <LogoutLink />
      </CollapsedMenu>
    </div>
  );
};

export default UserMenu;
