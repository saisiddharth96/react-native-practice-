import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("md-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "SideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "SideDrawerToggle"
              }
            ]
          }
        }
      ],
      appStyle : {        
        tabBarButtonColor : "#000000",
        tabBarSelectedButtonColor : "#33AAFF",        
      },
      drawer: {
        left: {
          screen: "awesome-places.SideDrawerComponent"
        }
      }
    });
  });
};

export default startTabs;
