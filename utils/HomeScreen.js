//Screen component testing//

import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

export default HomeScreen;