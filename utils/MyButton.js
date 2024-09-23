//Component testing//

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default MyButton;