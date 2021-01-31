import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Tabs, Tab,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MoovyLogo from '../../logo-moovy.svg';
import CollapsedMenu from './CollapsedMenu';
import { MENU_DATA } from '../../lib/constants';
import UserMenu from './UserMenu';
import ItemsMenu from './ItemsMenu';
import LoginButton from '../LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1,
    display: 'flex',
  },

  tabsAndLogo: {
    display: 'flex',
    minWidth: '60%',
  },

  appBarUp: {
    background: 'none',
    backgroundImage: 'linear-gradient(top, black, transparent)',
    boxShadow: 'none',
  },

  appBarDown: {
    background: 'black',
  },

  link: {
    textDecoration: 'none',
    color: '#ffffff',
    minWidth: '60px',
  },

  tabs: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginLeft: '5%',
  },

  toolbar: {
    display: 'flex',
  },

  tab: {
    fontSize: '12px',
    minWidth: '60px',
  },

  hamburgerMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginLeft: 'auto',
  },

}));

const Menu = ({ transparent }) => {
  const classes = useStyles();
  const location = useLocation();
  const { isAuthenticated } = useAuth0();

  const mapPath = useMemo(() => {
    const mapPath = () => {
      const currentPath = location.pathname;
      const selectedTable = MENU_DATA.find((item) => item.path === currentPath);
      return selectedTable ? selectedTable.index : 0;
    };

    return mapPath();
  }, [location.pathname]);

  const renderLeftMenu = () => isAuthenticated ? <UserMenu /> : <LoginButton />;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={transparent ? classes.appBarDown : classes.appBarUp}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.tabsAndLogo}>
            <img src={MoovyLogo} alt="logo" />
            <Tabs value={mapPath} className={classes.tabs}>
              {MENU_DATA.map((itemMenu) => (
                <Link key={itemMenu.key} className={classes.link} to={itemMenu.path}>
                  <Tab label={itemMenu.label} value={itemMenu.index} className={classes.tab} />
                </Link>
              ))}
            </Tabs>
          </div>
          {renderLeftMenu()}
          <div className={classes.hamburgerMenu}>
            <CollapsedMenu IconComponent={MenuIcon}>
              <ItemsMenu />
            </CollapsedMenu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;
