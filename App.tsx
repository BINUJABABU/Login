import React from "react";
import {View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView,StatusBar,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import MyIcon from './assets/MyIcon';
import MyIcon1 from './assets/images/MyIcon1'



const Login=()=>{
   return(
    <SafeAreaView style={styles.safe}>
     
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView automaticallyAdjustKeyboardInsets={true} style={styles.scrollView}>
      <View style={styles.logoContainer}>
         <Image source={require('./assets/images/Vector.png')} style={styles.image1}></Image>
         <Image source={require('./assets/images/image2.png')}  style={styles.logo}></Image> 
            <View style={styles.action}>
                <MyIcon style={styles.logo1}></MyIcon>
                <TextInput  style={styles.textInput} placeholder="User name" placeholderTextColor={'#7B7B7B'}></TextInput>
            </View>
            <View style={styles.action}>
                <MyIcon1 style={styles.logo1}></MyIcon1>
                <TextInput  style={styles.textInput} placeholder="Password" placeholderTextColor={'#7B7B7B'}></TextInput>
            </View>
            <View style={styles.textview}>
               <Text style={styles.text}>
                    Forgot your password?
               </Text>
            </View>
            <View style={{flex:1, width:'38%'}}>
                 <LinearGradient
                  colors={['#FFE500','#FF9452', '#FF6F7E', '#F63FB8', '#C037EB', '#8A46FF']}
                     start={{ x: 0.1, y: 1.0 }} end={{ x: 1.0, y: 0.0 }}
                     style={styles.grediant}>
                     <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>
                          Sign In
                      </Text>
                        <Icon name="arrow-right" size={15} color="black" style={{color:'#c97caabf',alignSelf:'center',margin:10}}></Icon> 
                     </TouchableOpacity>
                  </LinearGradient>
                  <View style={{flexDirection:'row',width:'100%',marginTop:35,flex:1}}>
                  <Text style={{fontWeight:'bold',fontSize:14}}>Don't have an account?</Text>
                  <Text style={{paddingLeft:5, color:'#8A46FF',textDecorationLine: 'underline'}}>Create</Text>
                  </View> 
                  <View style={{alignItems:'center'}}>
                  <Text>Continue With</Text>
                  </View>
                
                 </View>
                  <View style={{flex:1,position:'relative',marginRight:395,marginTop:153}}>
                  <View style={{position:'absolute',left:0,bottom:0,flexDirection:'row'}} >
                  <Image source={require('./assets/images/image3.png')}  ></Image>
                  <View style={{flex:1,marginTop:100,marginLeft:50}}>
                  <Image source={require('./assets/images/search.png')}  style={styles.search}></Image>
                  </View>
                  </View>
                  </View>
          </View>
      </ScrollView> 
  </SafeAreaView>
   )
}
const styles = StyleSheet.create({
  safe:{
    flex:1
  },
  logoContainer:{
    alignItems: 'center',
    backgroundColor:'#FAFAFA',
    flex:1,
    
  },
  image1:{
    width:'100%',
    alignItems:'center'
  },
  logo: {
    height: 200,
    width: 200,
    // marginTop: 1,
    resizeMode:'contain'
},
action: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 17,
    paddingHorizontal: 11,
    paddingTop:6,
    borderWidth: 1,
    borderColor:'white',
    borderRadius: 50,
    backgroundColor:'white',
    width:'90%',
    height:63,
    shadowColor: 'black',
    shadowOpacity: 10,
    shadowRadius: 80,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
},
smallIcon: {
    marginRight:10,
    padding:6,
},
textInput: {
    flex: 1,
    fontSize:18,
    marginLeft:8,
   
},
text:{
    color:'#8A46FF',
    fontWeight:'400'
},
textview:{
    marginTop:10,
    marginLeft:200,
    flex:1
},
grediant: {
    height: 44,
    width: "100%",
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:20,
    padding:1,
    borderRadius:40,
    
},
buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    margin: 1.5,
    borderRadius: 40,
    flexDirection:'row',
    
  },
buttonText: {
    textAlign: 'center',
    color: '#c976bb',
    alignSelf: 'center',
    fontSize:20
},
search:{
  resizeMode:'contain',
  height:37,
  width:29,
},
logo1:{
  marginRight: 8,
},
scrollView: {
  flex:1,
}, 
})
export default Login;