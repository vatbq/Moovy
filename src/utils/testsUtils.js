import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as initialMovieState } from '../reducers/movies-reducer';
import { initialState as initialUserState } from '../reducers/user-reducer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ movies: initialMovieState, user: initialUserState });

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Provider store={store}> <Router>{children}</Router></Provider>
  );
  return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), store };
}

export { render };
