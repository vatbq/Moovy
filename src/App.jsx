import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import HomeRedux from './components/HomeRedux';
import HomeReduxHooks from './components/HomeReduxHooks';
import Home from './components/Home';
import Menu from './components/Menu';
import MovieTrailer from './components/MovieTrailer';
import UserProfile from './components/UserProfile';
import Loading from './components/Loading';
import Approved from './components/Approved';
import TOC from './components/TOC';
import { useDispatch } from 'react-redux';
import { setUser, setFavoriteList, setWatchList } from './actions/user-actions';
import { setUserLocalStorage, isUserSavedLocalStorage, getUserLocalStorage } from './utils/UserUtils';
import { getUserPermission } from './api/sessionServices';

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}));

const App = () => {
  const classes = useStyles();
  const [showMenu, toggleMenu] = useState(false);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      toggleMenu(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      if (!isUserSavedLocalStorage(user.email)) {
        getUserPermission();
        setUserLocalStorage(user);
      }
      const userData = getUserLocalStorage(user.email);
      dispatch(setUser(userData));
      dispatch(setFavoriteList(userData.sessionId, userData.accountId));
      dispatch(setWatchList(userData.sessionId, userData.accountId));
    }
  }, [isAuthenticated, user, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Menu transparent={showMenu} />
        <Switch>
          <Route component={MovieTrailer} exact path="/movies/:id" />
          <Route component={HomeRedux} path="/homeRedux" />
          <Route component={HomeReduxHooks} path="/homeReduxHooks" />
          <Route component={UserProfile} path="/profile" />
          <Route component={Approved} path="/approved" />
          <Route component={TOC} path="/toc" />
          <Route component={Home} path="/" />
        </Switch>
      </Container>
    </>
  );
};

export default App;
