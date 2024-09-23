import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Login', route: 'Login' },
  { id: '2', title: 'Modal', route: 'Congratsmodal' },
  { id: '3', title: 'Bottom sheet', route: 'Bottom Sheet' },
  { id: '4', title: 'Modall', route: 'Modall' },
  { id: '5', title: 'Design', route: 'Design' },
  { id: '6', title: 'BottomTab', route: 'BottomTab' },
  { id: '7', title: 'LoginPage', route: 'LoginPage' },
  
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.route) }>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default HomeScreen;