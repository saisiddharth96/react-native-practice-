import { SET_PLACES, REMOVE_PLACE } from "./actionTypes.js";
import { ui_start_loading, ui_stop_loading, authGetToken } from "./index.js";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    let authToken;
    dispatch(ui_start_loading());
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found");
      })
      .then(token => {
        authToken = token;
        return fetch(
          "https://us-central1-react-native-map-1522954715437.cloudfunctions.net/storeImage",
          {
            method: "POST",
            body: JSON.stringify({
              image: image.base64
            }),
            headers: {
              Authorization: "Bearer " + authToken
            }
          }
        );
      })
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
        return fetch(
          "https://react-native-map-1522954715437.firebaseio.com/places.json?auth=" +
            authToken,
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        );
      })
      .then(res => res.json())
      .then(parseRes => {
        dispatch(ui_stop_loading());
        console.log(parseRes);
      })
      .catch(err => {
        alert("Please Try Again");
        dispatch(ui_stop_loading());
        console.log("Database error ", err);
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(
          "https://react-native-map-1522954715437.firebaseio.com/places.json?auth=" +
            token
        );
      })
      .catch(() => {
        alert("No valid token found");
      })
      .then(res => res.json())
      .then(parsedRes => {
        const places = [];
        for (let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          });
        }
        dispatch(setPlaces(places));
      })
      .catch(err => {
        alert("Some error occurred");
        console.log(err);
      });
  };
};

export const deletePlace = key => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found");
      })
      .then(token => {
        dispatch(removePlace(key));
        return fetch(
          "https://awesome-places-1511248766522.firebaseio.com/places/" +
            key +
            ".json?auth=" +
            token,
          {
            method: "DELETE"
          }
        )
          .then(res => res.json())
          .then(parsedRes => {
            console.log("Deleted!!");
          })
          .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
          });
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    key: key
  };
};
