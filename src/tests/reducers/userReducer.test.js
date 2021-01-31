import * as actions from '../../actions/user-actions';
import userReducer from '../../reducers/user-reducer';

const initialState = {
  favoriteList: [], watchList: []
};

const user = { username: 'example', email: 'example@gmail.com' };

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState)
  });

  it('should handle SET_USER', () => {
    expect(
      userReducer(initialState, actions.setUser(user))
    ).toEqual({
      ...user, ...initialState
    })
  });

  it('should handle UPDATE_USER', () => {
    const newUsername = { username: 'example-updated' };
    const currentStore = {
      ...user, ...initialState
    }

    expect(
      userReducer(currentStore, actions.updateUser(newUsername.username))
    ).toEqual({
      ...currentStore, ...newUsername
    })
  });

  it('should handle ADD_MOVIE_TO_FAVORITES', () => {
    const movie = { id: 1 };

    expect(
      userReducer(initialState, actions.addFavoriteMovie(movie))
    ).toEqual({
      ...initialState, favoriteList: [movie]
    })
  });

  it('should handle REMOVE_MOVIE_FROM_FAVORITES', () => {
    const movie = { id: 1 };
    const currentStore = {
      ...user, favoriteList: [movie], watchList: []
    }

    expect(
      userReducer(currentStore, actions.removeFavoriteMovie(movie))
    ).toEqual({
      ...user, favoriteList: [], watchList: []
    })
  });
})
