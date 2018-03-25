import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth.js";
import SharePlaceScreen from "./src/screens/Share Place/SharePlace.js";
import FindPlaceScreen from "./src/screens/Find Place/FindPlace.js";
import configureStore from "./src/store/configureStore.js";
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail.js';

const store = configureStore();

// Register Screens

Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  ()=> PlaceDetail,
  store,
  Provider
);

// Start a App

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
