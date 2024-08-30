import React, { useRef, useCallback } from 'react';
import { View, Text, Button, StyleSheet,Image,TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Work = () => {

  const bottomSheetRef = useRef(null);
  const snapPoints = ['25%'];
  const handleOpenPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);


    


  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Open" onPress={handleOpenPress} />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}  
        enablePanDownToClose={true}
        // onChange={handleSheetChanges} 
        >
        <View style={styles.contentContainer}>
      <View style={styles.view1} />
         <View style={styles.view2} >
          <View style={{flexDirection:'row'}}>
            <Image style={styles.image} source={require('./assets/images/pic.png')}></Image>
         <View style={{flex:1}}>
         <Text style={styles.text2}>Remove Follower?</Text>
         <Text style={{fontSize:14}}><Text style={{fontWeight:'bold'}}>Daelene Robersion</Text> won't be informed that they are removed from your follower</Text>
        </View>
         </View>
         </View>
         <TouchableOpacity style={styles.view3} >
            <Text style={styles.text3}>Unfollow</Text>
         </TouchableOpacity>
    </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  view1:{
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 1.5
},
view2:{
     height:100,  
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 2,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
},
text2:{
    marginTop:5,
    fontSize:20,
    paddingRight:100,
    fontWeight:'500'
},
image:{
    marginTop:5,
    marginHorizontal:15
},
view3:{
    marginTop:10
},
text3:{
    color:'red',
    fontSize:20,
    fontFamily:'bold',
    paddingLeft:30
},
  
});

export default Work;