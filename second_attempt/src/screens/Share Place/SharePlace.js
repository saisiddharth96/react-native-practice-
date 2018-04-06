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

class SharePlaceScreen extends Component {

  static navigatorStyle = {
    navBarButtonColor : "#33AAFF",
    navBarTextColor : "#33AAFF",
    navBarTitleTextCentered : true
  };

  state = {
    placeName: ""
  };

  constructor(props) {
    super(props);
    this.props.navigator.addOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  placenameChangedHandler = val => {
    this.setState({
      placeName: val
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

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== ""){
      this.props.onAddPlace(this.state.placeName);
    }
    this.setState({
      placeName : ""
    })
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share an update with the public </HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placenameChangedHandler}
          />
          <Button
            title="Share the place"
            onPress = {this.placeAddedHandler}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  }
});

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
