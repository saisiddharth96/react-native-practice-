import { SET_PLACES, REMOVE_PLACE } from "./actionTypes.js";
import {ui_start_loading, ui_stop_loading} from "./index.js"
export const addPlace = (placeName, location, image) => {
  return dispatch => {
      dispatch(ui_start_loading());
    fetch(
      "https://us-central1-react-native-map-1522954715437.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
    .catch(err => {
        alert("Please Try Again");
        dispatch(ui_stop_loading());
        console.log("POST error ", err);
      })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        console.log(parsedRes);
        return  fetch(
          "https://react-native-map-1522954715437.firebaseio.com/places.json",
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        );
      })
      .catch(err => {
          alert("Please Try Again");
        dispatch(ui_stop_loading());
        console.log("Database error ", err);
      })
      .then(res => res.json())
      .then(parseRes => {
        dispatch(ui_stop_loading());
        console.log(parseRes);
      });
    };
};

export const getPlaces = ()=>{
  return dispatch =>{
    fetch(
      "https://react-native-map-1522954715437.firebaseio.com/places.json")
      .catch(err =>{
        alert("Some error occurred");
        console.log(err);        
      })
      .then(res => res.json())
      .then(parsedRes =>{
        const places = [];
        for (let key in parsedRes){
          places.push({
            ...parsedRes[key],
            image : {
              uri : parsedRes[key].image
            },
            key : key
          })
        }
        dispatch(setPlaces(places));
      });
  }
};

export const deletePlace = (key) => {
  return dispatch => {
      dispatch(removePlace(key));
      fetch("https://awesome-places-1511248766522.firebaseio.com/places/" + key + ".json", {
          method: "DELETE"
      })
      .catch(err => {
          alert("Something went wrong, sorry :/");
          console.log(err);
      })
      .then(res => res.json())
      .then(parsedRes => {
          console.log("Done!");
      });
  };
};

export const setPlaces = (places)=>{
  return{
    type : SET_PLACES,
    places : places
  }
}

export const removePlace = key => {
  return {
      type: REMOVE_PLACE,
      key: key
  };
};
