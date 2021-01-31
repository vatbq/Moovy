import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../../components/Loading';

test('loads and displays Loading...', () => {
  render(<Loading />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
