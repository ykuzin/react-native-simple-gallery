import {registerRootComponent} from 'expo';
import App from './src/App';
import 'react-native-gesture-handler';

import React from 'react';

registerRootComponent(App);


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately


