import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,ImageBackground,Image,Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';


export default function Design() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" />
     <View style={styles.contain}>
        <View style={styles.top}>
        <LinearGradient
            colors={['#8A46FF','#B554F2']}
            start={{ x: 0.1, y: 1.0 }} end={{ x: 1.0, y: 0.1 }}
            style={styles.top}>
                <Text style={styles.text}>
                    Daily Event
                    <Image source={require('./assets/images/help.png')} style={styles.image}></Image>
                </Text>
                <Text style={styles.num}>05:35:09</Text>
            </LinearGradient>
        </View>
        <View style={styles.star}>
        <Image source={require('./assets/images/coin.png')} style={styles.image1}></Image>
        <Text style={styles.starr}>Calling all stars</Text>
        {/* <Button></Button> */}
        </View>
     </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
   },
  contain:{
    height: hp('90%'),
    width: wp('95%'),
    alignItems:'center',
    // backgroundColor:'pink',
    
  },
  top:{
    height: hp('15%'),
    width: wp('95%'),
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
   },
   text:{
    paddingTop:10,
    fontSize:25,
    color:'white',
    paddingLeft:20,
    fontWeight:'bold'
   },
   image:{
    resizeMode:'contain',
    },
    num:{
    paddingTop:10,
    paddingLeft:20,
    color:'white',
    fontSize:20,  
    },
    star:{
    height: hp('10%'),
    width: wp('95%'),
    // backgroundColor:'red', 
    flexDirection:'row'  
    },
    image1:{
        
    },
    starr:{
        fontSize:20,
        fontWeight:'bold'
    }
});