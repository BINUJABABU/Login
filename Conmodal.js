import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet,Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const Cngrtsmodal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal =()=>{
         setModalVisible ((prev)=>!prev)
    }
  
    return (
      <View style={styles.container}>
        <Button title="Open Modal" onPress={toggleModal} testID='modalButton' />
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <LinearGradient colors={['#8A46FF','#B554F2']} style={styles.gradientBorder} >
            <View style={styles.top}>
            <Image source={require('./assets/images/profile.png')} style={styles.imagebackground}></Image>
            </View>
            <View style={styles.text}>
             <Text style={styles.input1}>Congratulations!! You are now a Prestiage </Text>
             <Text style={styles.input1}>member. Enjoy your Benefits.</Text>
            </View>
            <View style={styles.button}>
            <LinearGradient
            colors={['#8A46FF','#B554F2']}
            start={{ x: 0.1, y: 1.1}} end={{ x: 1.1, y: 1.1 }} style={{borderRadius:10}}>
             <TouchableOpacity style={styles.opacity} onPress={toggleModal}>
             <Text style={styles.subscribe}>Continue</Text>
             </TouchableOpacity>
             </LinearGradient>
            </View>
            </LinearGradient>
          </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      height: hp('45%'),
      width: wp('95%'),
      backgroundColor: 'white',
      borderRadius: 25,
      alignItems: 'center',
    },
    top:{
        height: hp('24%'),
        width: wp('95%'),
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor:'white'
      },
    imagebackground:{
        resizeMode:'contain',
        height:130,
        width:130
    },
    image:{
        height:140,
        width:160,
    },
    text:{
        height: hp('10%'),
        width: wp('95%'),
        paddingLeft:20,
        alignItems:'center',
        backgroundColor:'white'
    },
    input1:{
        fontSize:wp('4%'),
        color:'#403D39',
        fontWeight:'bold'
    },
    button:{
        height: hp('11%'),
        width: wp('95%'),
        alignItems:'center',
        backgroundColor:'white',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    opacity:{
        height: hp('7%'),
        width: wp('85%'),
        alignItems: 'center',
        padding: 10,
        shadowColor: '#FFFFFF',
        shadowOpacity: 20,
        shadowRadius: 10,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        elevation: 5,
    },
    subscribe:{
        color:'white',
        fontSize:26,
        fontWeight:'bold',
    },
    gradientBorder:{
      borderRadius:25,
      padding:4,
      alignItems: 'center',
      
    }
  });
  
  export default Cngrtsmodal;