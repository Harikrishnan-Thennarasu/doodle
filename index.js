import 'react-native-gesture-handler';


/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import notifee from '@notifee/react-native';
import App from './App';
import { notifeeHandler } from './src/functions/notifee-services';


notifee.onBackgroundEvent(notifeeHandler);

AppRegistry.registerComponent(appName, () => App);
