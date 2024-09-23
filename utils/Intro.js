import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Intro (){
    return(
     <View  style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.instructions}>This is a React Native snapshot test</Text>
     </View>
    )
}
const styles = StyleSheet.create({
   container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF'
   },
   instructions:{
    color: '#333333',
    marginBottom: 5,
    textAlign:'center'
   },
   welcome:{
    fontSize:20,
    margin :10,
    textAlign:'center'
   }
})