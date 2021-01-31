import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../../lib/constants';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const ItemsMenu = () => {
  const classes = useStyles();

  return (
    <>
      {
        MENU_DATA.map((itemMenu) => (
          <Link key={itemMenu.key} className={classes.link} to={itemMenu.path}>
            <MenuItem>{itemMenu.label}</MenuItem>
          </Link>
        ))
      }
    </>
  );
};

export default ItemsMenu;
