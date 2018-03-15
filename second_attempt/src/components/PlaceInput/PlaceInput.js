import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () =>{
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    // this.setState({
    //   placeName : ""
    // })
  };

  render() {
    return (
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder="Enter a place name"
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button 
          title="Add" 
          style={styles.placeButton}
          onPress = {this.placeSubmitHandler}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeInput: {
    width : "70%"
  },
  placeButton : {
    width : '30%'
  },
  inputContainer : {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default PlaceInput;