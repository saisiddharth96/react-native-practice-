import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.imageStyle} />
        <Text style={styles.textStyling}> {props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
         <TouchableOpacity onPress={props.onItemDeleted}>
            <View style = {styles.deleteButton}>
              <Icon size={30} name="md-trash" color="rgb(255,0,0)" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  imageStyle: {
    width: "100%",
    height: 200
  },
  textStyling: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    margin: 15,
    color: "#000000"
  },
  buttonStyling: {
    marginBottom: 30
  },
  deleteButton :{
      alignItems : "center"
  },
//   deleteText:{
//       color : "red",
//       fontSize : 20,
//       margin : 15,
//       fontWeight : "bold"
//   }
});

export default PlaceDetail;
