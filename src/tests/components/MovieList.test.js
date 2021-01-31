import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/testsUtils';
import MovieList from '../../components/MovieList';

jest.mock('react-multi-carousel', () => (({ children }) => children));

describe('<MovieList />', () => {
  const listName = 'example';
  const fetchMovies = jest.fn();
  fetchMovies.mockReturnValue([{ id: 1, backdrop_path: 'example', genre_ids: [] },
  { id: 2, backdrop_path: 'example', genre_ids: [] }])
  const allGenres = ['g1', 'g2'];


  describe('render MovieList', () => {
    it('render save movie text', async () => {
      render(<MovieList listName={listName} fetchMovies={fetchMovies} allGenres={allGenres} />)

      await waitFor(() => expect(fetchMovies).toHaveBeenCalledTimes(1));

      expect(fetchMovies).toHaveBeenCalledTimes(1)
      expect(screen.getByTestId('movieId-1')).toBeInTheDocument()
      expect(screen.getByText(listName)).toBeInTheDocument();
    });
  })
});