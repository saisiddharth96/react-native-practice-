import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import ListItem from "./../ListItem/ListItem.js";

const PlaceList = props => {
  return(
  <FlatList
    style={styles.listContainer}
    data={props.places}
    renderItem={(info) => {
      <ListItem
        placeName={info.item.value}
        onItemClick={() => props.onItemDeleted(info.item.key)}
      />
    }}
  />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
