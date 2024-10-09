// // // import React, { useState } from 'react';
// // // import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
// // // import Video from 'react-native-video';

// // // const audioTracks = [
// // //   { id: '1', title: 'Audio Track 1', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
// // //   { id: '2', title: 'Audio Track 2', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
// // //   { id: '3', title: 'Audio Track 3', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
// // // ];

// // // const AudioPlayer = () => {
// // //   const [currentAudio, setCurrentAudio] = useState(null);

// // //   const renderItem = ({ item }) => (
// // //     <TouchableOpacity style={styles.item} onPress={() => setCurrentAudio(item.uri)}>
// // //       <Text style={styles.title}>{item.title}</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         data={audioTracks}
// // //         renderItem={renderItem}
// // //         keyExtractor={item => item.id}
// // //       />
// // //       {currentAudio && (
// // //         <Video
// // //           source={{ uri: currentAudio }}
// // //           style={styles.audio}
// // //           audioOnly={true} // Play audio only
// // //           controls={true} // Show playback controls
// // //           onError={(e) => console.log(e)}
// // //           onEnd={() => setCurrentAudio(null)} // Clear current audio on end
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //     justifyContent: 'flex-start',
// // //   },
// // //   item: {
// // //     padding: 15,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#ccc',
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //   },
// // //   audio: {
// // //     height: 0, // Hide the video player when audio only
// // //   },
// // // });

// // // export default AudioPlayer;

// // // import React, { useState } from 'react';
// // // import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
// // // import Video from 'react-native-video';

// // // const audioTracks = [
// // //   { id: '1', title: 'Audio Track 1', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
// // //   { id: '2', title: 'Audio Track 2', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
// // //   { id: '3', title: 'Audio Track 3', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
// // // ];

// // // const AudioPlayer = () => {
// // //   const [currentAudio, setCurrentAudio] = useState(null);

// // //   const renderItem = ({ item }) => (
// // //     <TouchableOpacity style={styles.item} onPress={() => setCurrentAudio(item.uri)}>
// // //       <Text style={styles.title}>{item.title}</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         data={audioTracks}
// // //         renderItem={renderItem}
// // //         keyExtractor={item => item.id}
// // //       />
// // //       {currentAudio && (
// // //         <Video
// // //           source={{ uri: currentAudio }}
// // //           style={styles.audio}
// // //           audioOnly={true} // Play audio only
// // //           controls={true} // Show playback controls
// // //           onError={(e) => console.log(e)}
// // //           onEnd={() => setCurrentAudio(null)} // Clear current audio on end
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //     justifyContent: 'flex-start',
// // //   },
// // //   item: {
// // //     padding: 15,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#ccc',
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //   },
// // //   audio: {
// // //     height: 0, // Hide the video player when audio only
// // //   },
// // // });

// // // export default AudioPlayer;

// // import React, { useState } from 'react';
// // import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
// // import Video from 'react-native-video';

// // const mediaTracks = [
// //   { id: '1', title: 'Audio Track 1', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', type: 'audio' },
// //   { id: '2', title: 'Video Track 1', uri: 'https://cdn.api.video/vod/vi1FBKkaYe5Y2L9wNbGDYztl/mp4/720/source.mp4?dl=1', type: 'video' },
// //   { id: '3', title: 'Audio Track 2', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', type: 'audio' },
// // ]

// // const MediaPlayer = () => {
// //   const [currentMedia, setCurrentMedia] = useState(null);

// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity style={styles.item} onPress={() => setCurrentMedia(item)}>
// //       <Text style={styles.title}>{item.title}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={mediaTracks}
// //         renderItem={renderItem}
// //         keyExtractor={item => item.id}
// //       />
// //       {currentMedia && (
// //         <Video
// //           source={{ uri: currentMedia.uri }}
// //           style={currentMedia.type === 'video' ? styles.video : styles.audio}
// //           controls={true} // Show playback controls
// //           resizeMode={currentMedia.type === 'video' ? 'contain' : 'cover'}
// //           audioOnly={currentMedia.type === 'audio'} // Play audio only if it's an audio track
// //           onError={(e) => console.log(e)}
// //           onEnd={() => setCurrentMedia(null)} // Clear current media on end
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'flex-start',
// //   },
// //   item: {
// //     padding: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   title: {
// //     fontSize: 18,
// //   },
// //   video: {
// //     width: '100%',
// //     height: 300, // Set your desired height for the video
// //     marginTop: 20, // Add some space above the video player
// //   },
// //   audio: {
// //     height: 0, // Hide the video player when audio only
// //   },
// // });

// // export default MediaPlayer;











// import React, { useState } from 'react';
// import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const audioTracks = [
//   { id: '1', title: 'Audio Track 1', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
//   { id: '2', title: 'Audio Track 2', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
//   { id: '3', title: 'Audio Track 3', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
// ];

// const AudioPlayer = () => {
//   const [currentAudio, setCurrentAudio] = useState(null);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.item} onPress={() => setCurrentAudio(item.uri)}>
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={audioTracks}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       {currentAudio && (
//         <Video
//           source={{ uri: currentAudio }}
//           style={styles.audio}
//           audioOnly={true} // Play audio only
//           controls={true} // Show playback controls
//           onError={(e) => console.log(e)}
//           onEnd={() => setCurrentAudio(null)} // Clear current audio on end
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'flex-start',
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   title: {
//     fontSize: 18,
//   },
//   audio: {
//     height: 0, // Hide the video player when audio only
//   },
// });

// export default AudioPlayer;

// import React, { useState } from 'react';
// import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const audioTracks = [
//   { id: '1', title: 'Audio Track 1', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
//   { id: '2', title: 'Audio Track 2', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
//   { id: '3', title: 'Audio Track 3', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
// ];

// const AudioPlayer = () => {
//   const [currentAudio, setCurrentAudio] = useState(null);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.item} onPress={() => setCurrentAudio(item.uri)}>
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={audioTracks}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       {currentAudio && (
//         <Video
//           source={{ uri: currentAudio }}
//           style={styles.audio}
//           audioOnly={true} // Play audio only
//           controls={true} // Show playback controls
//           onError={(e) => console.log(e)}
//           onEnd={() => setCurrentAudio(null)} // Clear current audio on end
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'flex-start',
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   title: {
//     fontSize: 18,
//   },
//   audio: {
//     height: 0, // Hide the video player when audio only
//   },
// });

// export default AudioPlayer;


// //------------------------------------------------------//

import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity,StatusBar,Image ,TextInput} from 'react-native';
import Video from 'react-native-video';
import coverImage1 from './src/components/image2.png'; 
import coverImage2 from './src/components/image2.png';
import coverImage3 from './src/components/image2.png';
import coverImage4 from './src/components/image2.png';
import { BlurView } from '@react-native-community/blur';
import SVGImage from './assets/svgimages/Chat';
import { PATH } from './assets/svgimages/Chat';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const mediaTracks = [
  { id: '1', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', type: 'audio',coverImage: coverImage1 },
  { id: '2', uri: 'https://cdn.api.video/vod/vi1FBKkaYe5Y2L9wNbGDYztl/mp4/720/source.mp4?dl=1', type: 'video',coverImage: coverImage2 },
  { id: '3', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', type: 'audio',coverImage: coverImage3 },
  { id: '4', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', type: 'audio',coverImage: coverImage4 },
  { id: '5', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '6', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '7', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '8', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '9', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '10', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '11', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '12', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '13', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '14', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '15', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '16', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '17', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '18', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '19', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '20', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '21', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '22', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '23', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '24', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '25', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '26', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '27', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '28', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '29', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '30', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '31', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '32', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '33', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '34', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '35', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '36', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '37', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '38', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '39', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '40', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '41', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '42', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '43', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '44', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '45', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '46', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '47', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '48', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '49', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '50', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '51', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '52', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '53', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '54', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '55', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '56', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '57', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '58', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '59', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '60', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '61', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '62', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '63', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '64', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '65', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '66', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '67', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '68', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '69', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '70', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '71', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '72', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '73', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '74', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '75', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '76', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '77', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '78', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '79', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '80', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '81', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '82', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '83', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '84', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '85', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '86', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '87', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '88', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '89', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '90', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2 ,type: 'audio'},
  { id: '91', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '92', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '93', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3 ,type: 'audio'},
  { id: '94', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4,type: 'audio' },
  { id: '95', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1 ,type: 'audio'},
  { id: '96', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
  { id: '97', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3', coverImage: coverImage3,type: 'audio' },
  { id: '98', uri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', coverImage: coverImage4 ,type: 'audio'},
  { id: '99', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3', coverImage: coverImage1,type: 'audio' },
  { id: '100', uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', coverImage: coverImage2,type: 'audio' },
];



const MediaPlayer = () => {
  const [currentMedia, setCurrentMedia] = useState(null);


  const RenderHeader = () => (
    <View style={{flexDirection:'row',flex:1}}>
         <Text style={{color:'white',fontWeight:600,fontSize:18,textDecorationLine:'underline'}}>For You</Text>
         <Text style={{color:'#828282',paddingLeft:10,fontWeight:600,fontSize:16}}>Live</Text>
     </View> 
);

  const renderItem = ({ item }) => {
    
    return(
        <View key={item.id} style={styles.page}>
        <StatusBar translucent backgroundColor="transparent" /> 
        
       <View style={styles.coverContainer}>
         <Image source={item.coverImage} style={styles.coverImage} />
         <BlurView style={styles.absolute} blurType='light' blurAmount={500} reducedTransparencyFallbackColor="White" />
          <View style={styles.main}> 
          <View style={styles.textview}>
          <View style={{flexDirection:'row',bottom:5}}>
           <Image style={{resizeMode:'contain',height:30,width:30}} source={require('./src/components/profile.png')}></Image> 
         <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item.type === 'audio' ? 'Audio' : 'Video'} 
           {/* {item.type === 'audio' ? 'Amma_Wasson' : 'Amma_Wasson'} */}
         </Text>
      
         <TouchableOpacity style={styles.button} onPress={() => setCurrentMedia(item)}>
           <Text style={styles.buttonText}>Follow</Text> 
         </TouchableOpacity>
       </View>

        <View style={{paddingBottom:5}}>
         <Text style={{color:'white',fontWeight:500,fontSize:16}}>FIRE BOY!!...more</Text>
         </View>
         <View style={{paddingBottom:8, flexDirection:'row'}}>
          <Image source={require('./src/components/Vector.png')}></Image>  
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
                <SVGImage fill={'red'} svgContent={PATH.like_icon}/>
                {/* <SVGImage svgContent={PATH.like_icon}/> */}
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
       
        {currentMedia && (
        <Video
          source={{ uri: currentMedia.uri }}
          style={currentMedia.type === 'video' ? styles.video : styles.audio}
          controls={true} // Show playback controls
          resizeMode={currentMedia.type === 'video' ? 'contain' : 'cover'}
          audioOnly={currentMedia.type === 'audio'} // Play audio only if it's an audio track
          onError={(e) => console.log(e)}
          onEnd={() => setCurrentMedia(null)} // Clear current media on end
        />
      )}
       
     </View>
   );
    
};

  return (
    <View style={styles.container}>
     <View style={{position:'absolute',zIndex:100,top:30}}><RenderHeader /></View>
      <FlatList
        data={mediaTracks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollView}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({

  video: {
    width: '100%',
    height: 300, // Set your desired height for the video
    marginTop: 20, // Add some space above the video player
  },
  audio: {
    height: 0, // Hide the video player when audio only
  },
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
    width:widthPercentageToDP('100%'),
    height:heightPercentageToDP('87%'),
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
    marginLeft:100,
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
     marginBottom:0
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
    marginBottom:0,
    left:30,
    gap:5
  },
  
});

export default MediaPlayer;


