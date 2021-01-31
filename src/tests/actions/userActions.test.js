import * as actions from '../../actions/user-actions';

describe('user actions', () => {

  it('should create an action to update user', () => {
    const username = 'example'
    const expectedAction = {
      type: actions.UPDATE_USER,
      payload: { username }
    }
    expect(actions.updateUser(username)).toEqual(expectedAction)
  });

  it('should create an action to set user', () => {
    const userData = { username: 'example', email: 'example@gmail.com' }
    const expectedAction = {
      type: actions.SET_USER,
      payload: userData
    }
    expect(actions.setUser(userData)).toEqual(expectedAction)
  });

  it('should create an action to set session', () => {
    const sessionId = 'example'
    const expectedAction = {
      type: actions.SET_SESSION,
      payload: { sessionId }
    }
    expect(actions.setSession(sessionId)).toEqual(expectedAction)
  });


  it('should create an action to set account', () => {
    const accountId = 7418937;
    const expectedAction = {
      type: actions.SET_ACCOUNT,
      payload: { accountId }
    }
    expect(actions.setAccount(accountId)).toEqual(expectedAction)
  });

  it('should create an action to add a favorite movie', () => {
    const movie = {
      id: 1,
      title: 'Movie Example'
    }
    const expectedAction = {
      type: actions.ADD_MOVIE_TO_FAVORITES,
      payload: { movie }
    }
    expect(actions.addFavoriteMovie(movie)).toEqual(expectedAction)
  });

  it('should create an action to remove a favorite movie', () => {
    const movie = {
      id: 1,
      title: 'Movie Example'
    }
    const expectedAction = {
      type: actions.REMOVE_MOVIE_FROM_FAVORITES,
      payload: { movie }
    }
    expect(actions.removeFavoriteMovie(movie)).toEqual(expectedAction)
  });

  it('should create an action to add a wacthed movie', () => {
    const movie = {
      id: 1,
      title: 'Movie Example'
    }
    const expectedAction = {
      type: actions.ADD_MOVIE_TO_WATCHED,
      payload: { movie }
    }
    expect(actions.addWatchedMovie(movie)).toEqual(expectedAction)
  });

  it('should create an action to remove a favorite movie', () => {
    const movie = {
      id: 1,
      title: 'Movie Example'
    }
    const expectedAction = {
      type: actions.REMOVE_MOVIE_FROM_WATCHED,
      payload: { movie }
    }
    expect(actions.removeWatchedMovie(movie)).toEqual(expectedAction)
  });
})
