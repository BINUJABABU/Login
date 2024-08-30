import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet,Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const Modall = () => {
    const [modalVisible, setModalVisible] = useState(false);
  
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
  
    return (
      <View style={styles.container}>
        <Button title="Open Modal" onPress={openModal} />
  
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
            <View style={styles.top}>
            <Image source={require('./assets/images/Padlock.png')} style={styles.image}></Image>
            </View>
            <View style={styles.text}>
             <Text style={styles.input}>This Feature is Available for Prestige members only!</Text>
             <Text style={styles.input1}>Subscribe now and get the benefits of being a Prestige member</Text>
             <Text style={styles.input2}>Learn More</Text>
            </View>
            <View style={styles.button}>
            <LinearGradient
            colors={['#8A46FF','#B554F2']}
            start={{ x: 0.1, y: 1.1}} end={{ x: 1.1, y: 1.1 }} style={{borderRadius:10}}>
             <TouchableOpacity style={styles.opacity} onPress={closeModal}>
             <Text style={styles.subscribe}>Subscribe now</Text>
             </TouchableOpacity>
             </LinearGradient>
            </View>
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
      borderColor:'#8A46FF',
      borderWidth:4
    },
    top:{
        height: hp('14%'),
        width: wp('95%'),
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // backgroundColor:'pink'
        },
    image:{
        resizeMode:'contain',
        height:150,
        width:75
    },
    text:{
        height: hp('20%'),
        width: wp('95%'),
        paddingLeft:20
    },
    input:{
        fontSize:wp('6%'),
        fontWeight:'bold',
    },
    input1:{
        fontSize:wp('5%'),
        paddingTop:5
    },
    input2:{
        fontSize:wp('5%'),
        color:'#8A46FF',
        paddingTop:5,
        fontWeight:'bold'
    },
    button:{
        height: hp('11%'),
        width: wp('95%'),
        alignItems:'center',
        marginTop:3,
    },
    opacity:{
        height: hp('7%'),
        width: wp('85%'),
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000000',
        shadowOpacity: 20,
        shadowRadius: 10,
        shadowOffset: {
          height: 5,
          width: 1,
        },
        elevation: 5,
    },
    subscribe:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
    }
  });
  
  export default Modall;