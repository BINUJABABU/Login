import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyButton from './MyButton';

test('renders button with title', () => {
  const { getByText } = render(<MyButton title="Click Me" />);
  expect(getByText('Click Me')).toBeTruthy();
});

test('calls onPress when button is pressed', () => {
  const mockPress = jest.fn();
  const { getByText } = render(<MyButton title="Click Me" onPress={mockPress} />);
  
  fireEvent.press(getByText('Click Me'));
  expect(mockPress).toHaveBeenCalled();
});