import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen';
import Login from './Login';
import Cngrtsmodal from './Conmodal';
import Work from './work';
import Modall from './Modal';
import Design from './Design';
import Bottomtab from './Bottomtabb';
import LoginPage from './utils/Login';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Congratsmodal" component={Cngrtsmodal} />
        <Stack.Screen name="Bottom Sheet" component={Work} />
        <Stack.Screen name="Modall" component={Modall} />
        <Stack.Screen name="Design" component={Design} />
        <Stack.Screen name="BottomTab" component={Bottomtab} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

