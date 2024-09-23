import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

test('renders Home Screen and navigates', () => {
  const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
  
  expect(getByText('Home Screen')).toBeTruthy();

  fireEvent.press(getByText('Go to Details'));
  expect(mockNavigate).toHaveBeenCalledWith('Details');
});