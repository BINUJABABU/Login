import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AudioPlayer from './Audio';


jest.mock('react-native-video', () => {
  return () => <></>; 
  
});

describe('AudioPlayer', () => {
  it('renders audio items correctly', () => {
    const { getByText } = render(<AudioPlayer />);

    expect(getByText('Amma_Wassona')).toBeTruthy();
  });

  it('toggles audio play state', () => {
    const { getByText } = render(<AudioPlayer />);
     const button = getByText('Follow');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(button).toBeTruthy();
  });

  it('plays the selected audio', () => {
    const { getByText } = render(<AudioPlayer />);
    const button = getByText('Follow');
    fireEvent.press(button);

    
  });
});
