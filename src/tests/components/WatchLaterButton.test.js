import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../../utils/testsUtils';
import WatchLaterButton from '../../components/WatchLaterButton';
import { saveMovie, removeSavedMovie, belongsToList } from '../../api/userServices';
import { removeWatchedMovie, addWatchedMovie } from '../../actions/user-actions';

jest.mock('../../api/userServices');

saveMovie.mockImplementation(() => ({ status: 200 }));
removeSavedMovie.mockImplementation(() => ({ status: 200 }));

describe('<WatchLaterButton />', () => {
  const movie = { id: 1 };

  describe('render WatchLaterButton with text', () => {
    it('render save movie text', () => {
      const { getByText } = render(<WatchLaterButton showText movie={movie} />);

      expect(getByText('Save Movie')).toBeInTheDocument();
    });
  })

  describe('render WatchLaterButton without text', () => {
    it('not render save movie text', () => {
      const { queryByText } = render(<WatchLaterButton showText={false} movie={movie} />);

      expect(queryByText('Save Movie')).not.toBeInTheDocument();
    });
  })

  describe('click on watch later button', () => {

    it('save the movie and dispatch the action', async () => {
      const { store } = render(<WatchLaterButton movie={movie} />);

      fireEvent.click(screen.getByTestId('watchLaterButton'));

      await waitFor(() => expect(saveMovie).toHaveBeenCalledTimes(1));

      const actions = store.getActions()
      const expectedPayload = addWatchedMovie(movie);
      expect(actions).toEqual([expectedPayload]);

      store.clearActions();
    });

    it('save the movie and dispatch the action', async () => {
      belongsToList.mockImplementation(() => true);

      const { store } = render(<WatchLaterButton movie={movie} />);

      fireEvent.click(screen.getByTestId('watchLaterButton'));

      await waitFor(() => expect(removeSavedMovie).toHaveBeenCalledTimes(1));

      const actions = store.getActions()
      const expectedPayload = removeWatchedMovie(movie);
      expect(actions).toEqual([expectedPayload]);

      store.clearActions();
    });

  })
})
