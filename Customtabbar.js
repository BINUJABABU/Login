import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import AudioPlayer from './src/components/Audio';


function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home</Text> */}
      <AudioPlayer></AudioPlayer>
    </View>
  );
}
function Live() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Live</Text>
      </View>
  );
}
function Add() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
  );
}
function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat</Text>
    </View>
  );
}
function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
  );
}

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const currentIndex = state.index;

const getLabelStyle = (isFocused) => ({
  color: isFocused ? '#B39DDB' : '#B39DDB',
  fontWeight:400,
  fontFamily:'roboto'
});

const getIconSource = (routeName) => {
  switch (routeName) {
    case 'Home':
      return require('./assets/home.png');
    case 'Live':
      return require('./assets/live.png');
    case 'Chat':
      return require('./assets/chat.png');
    case 'Profile':
      return require('./assets/profile.png');
    default:
      return require('./assets/add.png');
  }
};

const getIconStyle = (routeName) => {
  switch (routeName) {
    case 'Home':
      return styles.iconHome;
    case 'Live':
      return styles.iconLive;
    case 'Chat':
      return styles.iconChat;
    case 'Profile':
      return styles.iconProfile;
   default:
      return styles.iconAdd;
  }
};

return (
  <View style={styles.container}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const isFocused = currentIndex === index;
      const iconSource = getIconSource(route.name);
      const iconStyle = getIconStyle(route.name);
      const labelStyle = getLabelStyle(isFocused);

      return (
        <TouchableOpacity
          key={route.key}
          onPress={() => navigation.navigate(route.name)}
          style={styles.tab}
          accessibilityRole="button" >
          <Image source={iconSource} style={iconStyle} />
          <Text style={labelStyle}>{route.name}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
  
);
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
     tabBar={(props) => <CustomTabBar {...props} />}>
      
     <Tab.Screen
        name="Home"
        component={Home}
      />
     <Tab.Screen
        name="Live"
        component={Live}
      />
      <Tab.Screen
        name=" "
        component={Add} 
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
      />
     <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 98,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHome: { width: 26, height: 26 },
  iconLive: { width: 33, height: 26 },
  iconChat: { width: 26, height: 26 },
  iconProfile: { width: 23, height:26 },
  iconAdd: { width:60, height: 60 },
});
export default BottomTabNavigator;






