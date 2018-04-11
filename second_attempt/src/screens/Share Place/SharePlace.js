import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/index.js";
import MainText from "../../components/UI/MainText/MainText.js";
import HeadingText from "../../components/UI/HeadingText/HeadingText.js";
import PlaceInput from "../../components/PlaceInput/PlaceInput.js";
import PickImage from "../../components/PickImage/PickImage.js";
import PickLocation from "../../components/PickLocation/PickLocation.js";
import validate from "../../utility/validation.js";

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "#33AAFF",
    navBarTextColor: "#33AAFF",
    navBarTitleTextCentered: true
  };

  state = {
    controls: {
      placeName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: false
      },
      image : {
        value : null, 
        valid : false
      }
    }
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val, prevState.controls.placeName.validationRules),
            touched: true
          }
        }
      };
    });
  };

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "SideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  imagePickedHandler = image => {
    this.setState(prevState =>{
      return {
        controls : {
          ...prevState.controls,
          image : {
            value : image,
            valid : true
          } 
        }
      }
    })
  };

  placeAddedHandler = () => {
    this.props.onAddPlace(
      this.state.controls.placeName.value,
      this.state.controls.location.value,
      this.state.controls.image.value
    );
   };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share an update with the public </HeadingText>
          </MainText>
          <PickImage onImagePicked = {this.imagePickedHandler} />
          <PickLocation onLocationPick={this.locationPickedHandler} />
          <PlaceInput
            placeData={this.state.controls.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button
              title="Share the place"
              onPress={this.placeAddedHandler}
              disabled={
                !this.state.controls.placeName.valid ||
                !this.state.controls.location.valid ||
                !this.state.controls.image.valid
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, location, image) => dispatch(addPlace(placeName, location, image))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  button: {
    margin: 8
  }
});

export default connect(null, mapDispatchToProps)(SharePlaceScreen);