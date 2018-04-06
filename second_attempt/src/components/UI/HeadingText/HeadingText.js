import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MainText from "../MainText/MainText.js";

const HeadingText = props => (
  <MainText>
    <Text {...props} style={[styles.textHeading, props.style]}>
      {props.children}
    </Text>
  </MainText>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    margin: 10,
    fontWeight: "bold",
    color: "#000"
  }
});

export default HeadingText;
