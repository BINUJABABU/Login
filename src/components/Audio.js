import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View, Image, TextInput, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import coverImage1 from '../components/image2.png'; 
import coverImage2 from '../components/image2.png';
import coverImage3 from '../components/image2.png';
import coverImage4 from '../components/image2.png';
import { BlurView } from '@react-native-community/blur';
// import {GlassView} from '@metafic-co/react-native-glassmorphism'
import SVGImage from '../../assets/svgimages/Chat';
import { PATH } from '../../assets/svgimages/Chat';
import LinearGradient from 'react-native-linear-gradient';



//Array of audio files objects

const mediaFiles = [
  { id: '1', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '2', url: 'https://cdn.api.video/vod/vi1FBKkaYe5Y2L9wNbGDYztl/mp4/720/source.mp4?dl=1 ', coverImage: coverImage2, type: 'video' },
  { id: '3', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '4', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '5', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '6', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '7', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '8', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '9', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '10', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '11', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '12', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '13', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '14', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '15', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '16', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '17', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '18', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '19', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '20', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '21', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '22', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '23', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '24', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '25', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '26', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '27', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '28', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '29', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '30', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '31', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '32', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '33', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '34', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '35', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '36', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '37', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '38', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '39', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '40', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '41', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '42', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '43', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '44', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '45', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '46', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '47', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '48', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '49', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '50', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '51', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '52', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '53', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '54', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '55', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '56', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '57', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '58', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '59', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '60', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '61', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '62', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '63', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '64', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '65', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '66', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '67', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '68', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '69', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '70', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '71', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '72', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '73', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '74', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '75', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '76', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '77', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '78', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '79', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '80', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '81', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '82', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '83', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '84', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '85', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '86', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '87', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '88', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '89', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '90', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '91', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '92', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '93', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '94', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '95', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '96', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '97', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '98', url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '99', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '100', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
];


const AudioPlayer = () => {
  const playerRef = useRef(null);                                                   // A reference for the video player, allowing control over playback.
  const [currentAudio, setCurrentAudio] = useState(null);                           // currentAudio - State to track the currently playing audio URL.
  const [isPlaying, setIsPlaying] = useState({});                                  // isPlaying - State to track the playing status of each audio file using an object.

  const toggleMedia = (url, type) => {
    if (currentAudio !== url) {
      setCurrentAudio(url);
      setIsPlaying({ [url]: true }); 
    } else {
      setIsPlaying(prevState => ({
        ...prevState,
        [url]: !prevState[url], 
      }));
    }
  };
  
  const renderMediaPage = (item) => {
    const isCurrentPlaying = isPlaying[item.url] || false; 
    return (
      <View key={item.id} style={styles.page}>
        <View style={styles.coverContainer}>
          <Image source={item.coverImage} style={styles.coverImage} />
          <BlurView style={styles.absolute} blurType='light' blurAmount={500} reducedTransparencyFallbackColor="White" />
          <View style={{flexDirection:'row',}}>
            <Text style={{color:'white',bottom:470,fontWeight:600,fontSize:18}}>Followers</Text>
            <Text style={{color:'#828282',bottom:470,paddingLeft:10,fontWeight:600,fontSize:16}}>Following</Text>
        </View>
        <View style={styles.main}> 
           <View style={styles.textview}>
           <View style={{flexDirection:'row',bottom:5}}>
            <Image style={{resizeMode:'contain',height:30,width:30}} source={require('../components/profile.png')}></Image>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {/* {item.type === 'audio' ? 'Audio' : 'Video'} */}
            {item.type === 'audio' ? 'Amma_Wasson' : 'Video'}
          </Text>
       
          <TouchableOpacity style={styles.button} onPress={() => toggleMedia(item.url, item.type)}>
            <Text style={styles.buttonText}>{isCurrentPlaying ? 'Pause' : 'Follow'}</Text>
          </TouchableOpacity>
        </View>

         <View style={{paddingBottom:5}}>
          <Text style={{color:'white',fontWeight:500,fontSize:16}}>FIRE BOY!!...more</Text>
          </View>
          <View style={{paddingBottom:8, flexDirection:'row'}}>
           <Image source={require('../components/Vector.png')}></Image> 
          <Text  style={{color:'white',fontWeight:500,fontSize:12,paddingLeft:5}}>All That We loved - Original Audio</Text>
          </View>
          <View style={{flexDirection:'row',paddingRight:140,paddingBottom:5}}>
            <TextInput placeholder='# Hashtags'placeholderTextColor={'white'} 
             style={styles.input1}></TextInput>
            <TextInput placeholder='@ Mention' placeholderTextColor={'white'} style={styles.input2}></TextInput>
          </View>
            <Text  style={{color:'white',fontWeight:"500",fontSize:12}}>1 days ago</Text>
            </View>
            <View style={styles.iconview}>
              <View>
                 {/* <SVGImage fill={'red'} svgContent={PATH.like_icon}/> */}
                 <SVGImage svgContent={PATH.like_icon}/>
                 <Text style={styles.icon}>4.1k</Text>
              </View>
              <View>
                 <SVGImage svgContent={PATH.comment_icon}/>
                 <Text style={styles.icon}>447</Text>
              </View>
              <View>
                  <SVGImage svgContent={PATH.gift_icon}/>
                  <Text style={styles.icon}>143</Text>
              </View>
              <View>
                  <SVGImage svgContent={PATH.share_icon}/>
                  <Text style={styles.icon}>20</Text>
              </View>
              <View>
                  <SVGImage svgContent={PATH.mute_icon}/>
              </View>
           </View>
        </View>
        </View> 
        {currentAudio === item.url && (
          <Video
            ref={playerRef}
            source={{ uri: currentAudio }}
            audioOnly={item.type === 'audio'}
            paused={!isCurrentPlaying}
            onEnd={() => setIsPlaying({ ...isPlaying, [currentAudio]: false })} 
            // style={styles.videoPlayer} // Define this style
            style={item.type === 'video' ? styles.videoPlayer : styles.audioPlayer} // Use conditional styling
          />
        )}
        
      </View>
    );
  };
  
 return (
    <View style={styles.container}>
      <ScrollView
          pagingEnabled
          horizontal={false}
          contentContainerStyle={styles.scrollView}>                                                                    
          {mediaFiles.map(renderMediaPage)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:'pink'
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    },
  coverContainer: {
    width: 400, 
    height: 541,
    overflow: 'hidden',
    alignItems:'center',
    justifyContent:'center',
    },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    justifyContent:'center',
    color: 'white',
    fontWeight:'500',
    fontSize:16,
    marginLeft:35
  },
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:2,
    gap:10,
    marginLeft:160,
    height:24,
    width:65
  },
  buttonText: {
    color: '#000',
    fontWeight:'500',
    fontSize: 14,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
  },
  main:{
    position: 'absolute',
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'center',
    left:15,
  },
  textview:{
    marginBottom:100
  },
  input1:{
    width:75,
    height:20,
    borderRadius:4,
    borderWidth:1,
    paddingBottom:3,
    paddingLeft:5,
    paddingTop:3,
    paddingRight:5,
    borderColor:'#DADADA',
    backgroundColor:'#454545',
    fontSize:12,
    fontWeight:'400',
  },
  input2:{
    width:75,
    height:20,
    borderRadius:4,
    borderWidth:1,
    paddingBottom:3,
    paddingLeft:5,
    paddingTop:3,
    paddingRight:5,
    borderColor:'#DADADA',
    backgroundColor:'#454545',
    fontSize:12,
    fontWeight:'400',
    marginLeft:5
  },
  icon:{
    color:'white',
    fontWeight:'500',
    paddingBottom:10,
    paddingRight:7,
    fontSize:14,
  },
  iconview:{
    alignItems:'flex-end',
    marginTop:300,
    paddingRight:1,
    marginBottom:95,
    left:30,
    gap:5
  },
  
});

export default AudioPlayer;
