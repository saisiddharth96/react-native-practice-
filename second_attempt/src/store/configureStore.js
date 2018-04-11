import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import placesReducer from "./reducers/places.js";
import uiReducer from "./reducers/ui.js";


const rootReducer = combineReducers({
  places: placesReducer,
  ui : uiReducer
});

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
