import React, { Component } from "react";
import { View, Image, StyleSheet, Button } from "react-native";

import backgroundImage from "../../assets/dog.jpg";

class PickImage extends Component {
  render() {
    return (
      <View style = {styles.container} >
        <View style={styles.placeholder}>
          <Image source={backgroundImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Upload An Image Image" onPress = {()=> alert("Pick Image Clicked") } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      width : "100%",
      alignItems : "center"
    },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 10
  }
});

export default PickImage;
