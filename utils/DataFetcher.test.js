import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import DataFetcher from './DataFetcher';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Test Title' }),
  })
);

afterEach(() => {
  jest.resetAllMocks();
});

test('fetches and displays data', async () => {
  const { getByText } = render(<DataFetcher />);

  await waitFor(() => expect(getByText('Test Title')).toBeTruthy());
});