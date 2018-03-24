import {
  ADD_PLACE,
  SELECT_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE
} from "./../actions/actionTypes.js";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "http://www.hdwallpapery.com/static/images/1391099215267_hero2_niQ3B7S.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }), 
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    case DESELECT_PLACE: {
      return {
        ...state,
        selectedPlace: null
      };
    }
    default:
      return state;
  }
};

export default reducer;
