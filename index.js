/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import "react-native-gesture-handler";
import Work from './work';
import Design from './Design';
import Modall from './Modal';
import Cngrtsmodal from './Conmodal';


// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Work);
// AppRegistry.registerComponent(appName, () => Design);
AppRegistry.registerComponent(appName, () => Modall);
AppRegistry.registerComponent(appName, () => Cngrtsmodal);

