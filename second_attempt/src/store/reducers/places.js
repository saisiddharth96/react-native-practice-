import {
  ADD_PLACE,
  DELETE_PLACE,
} from "./../actions/actionTypes.js";

const initialState = {
  places: [],
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
          return place.key !== action.placeKey;
        }), 
        
      };
    default:
      return state;
  }
};

export default reducer;
