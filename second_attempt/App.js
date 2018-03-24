import {Navigation} from 'react-native-navigation';


import AuthScreen from './src/screens/Auth/Auth.js';
import  SharePlaceScreen  from './src/screens/Share Place/SharePlace.js';
import FindPlaceScreen from './src/screens/Find Place/FindPlace.js';

// Register Screens 

Navigation.registerComponent("awesome-places.AuthScreen", ()=> AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", ()=> SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", ()=> FindPlaceScreen);

// Start a App

Navigation.startSingleScreenApp({
  screen : {
    screen : "awesome-places.AuthScreen", 
    title : "Login"
  }
});