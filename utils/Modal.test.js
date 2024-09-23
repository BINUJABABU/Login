import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyModal from './Modal';

test('renders modal when visible is true', () => {
  const { getByText } = render(<MyModal visible={true} onClose={() => {}} />);
  
  expect(getByText('This is a modal!')).toBeTruthy();
});

test('does not render modal when visible is false', () => {
  const { queryByText } = render(<MyModal visible={false} onClose={() => {}} />);
  
  expect(queryByText('This is a modal!')).toBeNull();
});

test('calls onClose when close button is pressed', () => {
  const mockOnClose = jest.fn();
  const { getByText } = render(<MyModal visible={true} onClose={mockOnClose} />);
  
  fireEvent.press(getByText('Close'));
  expect(mockOnClose).toHaveBeenCalled();
});