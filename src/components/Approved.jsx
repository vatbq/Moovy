import React, { useMemo, useEffect, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { getSessionId } from '../api/sessionServices';
import { setSession, setAccount } from '../actions/user-actions';
import { setSessionDataLocalStorage } from '../utils/UserUtils';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getUserAccount } from '../api/userServices';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
  },
}));

const Approved = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const { user } = useAuth0();
  const history = useHistory();
  const dispatch = useDispatch();

  const requestToken = useMemo(() => search.split('&')[0].split('=')[1], [search]);

  useEffect(() => {
    const createSession = async () => {
      const sessionId = await getSessionId(requestToken);
      const accountId = await getUserAccount(sessionId);
      setSessionDataLocalStorage(user.email, sessionId, accountId);
      dispatch(setSession(sessionId));
      dispatch(setAccount(accountId));
    }

    createSession();
  }, [requestToken, user, dispatch])

  const handleOnClick = useCallback(() => {
    history.push('/home');
  }, [history]);

  return (
    <div className={classes.container}>
      <h1 className={classes.text}>You signed in successfully!</h1>
      <Button variant="contained" color="primary" onClick={handleOnClick}> Go Home </Button>
    </div>
  )
}

export default Approved;