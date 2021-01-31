import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import InputUser from './InputUser';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/user-actions';
import { updateUserLocalStorage } from '../utils/UserUtils';
import { selectUsername } from '../selectors/userSelector';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'rgb(245 238 238 / 20%) !important',
  },

  labelFocused: {
    color: 'rgb(245 238 238 / 50%) !important',
  },

  input: {
    color: 'rgb(245 238 238 / 50%) !important',
    marginBottom: '50px',
  },
}));

const FormUser = () => {
  const classes = useStyles();
  const { user } = useAuth0();
  const currentUsername = useSelector(selectUsername);
  const [username, setUsername] = useState(currentUsername);
  const dispatch = useDispatch();

  const handleInput = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    dispatch(updateUser(username));
    updateUserLocalStorage(user.email, username);
  }, [username, user, dispatch]);

  return (
    <form className={classes.root}>
      <InputUser label="Username" value={username} onChange={handleInput} />
      <InputUser label="Email" value={user.email} textFieldProps={{ disabled: true }} />
      <Button variant="contained" color="primary" onClick={handleSubmit}> Save </Button>
    </form>
  );
};

export default FormUser;
