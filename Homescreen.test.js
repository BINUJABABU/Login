import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

// mock navigation object - This object includes methods like navigate. For testing usually need navigate.
const mockNavigation = {
  navigate: jest.fn(),
};
 
//It allows to test components that use React navigation without requiring a full nvigation setup. 

const renderWithNavigation = () => {
  return render(
    <NavigationContainer>
      <HomeScreen navigation={mockNavigation} />
    </NavigationContainer>
  );
};

describe('HomeScreen', () => {
  it('renders the correct number of items in FlatList', () => {
    const { getAllByText } = renderWithNavigation();

  // Check if 7 items are rendered  /DATA/ used to find all elements of the data
    const items = getAllByText(/DATA/i);
    expect(items.length).toBe(7); 
  });

  it('navigates to Login screen on item press', () => {
    const { getByText } = renderWithNavigation();
    fireEvent.press(getByText("Login"));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login', { item: { id: '1', title: 'Login' } });
  });
});

