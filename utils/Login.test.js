import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginPage from './Login';

describe('LoginPage Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage onLogin={() => {}} />);
    
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('shows error message when fields are empty', () => {
    const { getByText } = render(<LoginPage onLogin={() => {}} />);

    fireEvent.press(getByText('Login'));
    
    expect(getByText('Please enter both username and password.')).toBeTruthy();
  });

  it('calls onLogin with username and password', () => {
    const onLoginMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<LoginPage onLogin={onLoginMock} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'testUser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'testPassword');
    fireEvent.press(getByText('Login'));

    expect(onLoginMock).toHaveBeenCalledWith('testUser', 'testPassword');
  });
});