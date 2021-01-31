import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import FormUser from './FormUser';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px',
    color: '#ffffff',
  },

  userInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  picture: {
    width: '120px',
    height: '120px',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },

  divider: {
    background: 'rgb(245 238 238 / 20%)',
    marginTop: '5px',
    marginBottom: '30px',
  },

}));

const UserProfile = () => {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <h1>Edit Profile</h1>
        <Divider className={classes.divider} />
        <div className={classes.userInfo}>
          <img src={user.picture} alt={user.name} className={classes.picture} />
          <div className={classes.formContainer}>
            <FormUser />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
