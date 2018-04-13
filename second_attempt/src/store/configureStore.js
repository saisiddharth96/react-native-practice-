import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import placesReducer from "./reducers/places.js";
import uiReducer from "./reducers/ui.js";
import authReducer from "./reducers/auth.js";

const rootReducer = combineReducers({
  places: placesReducer,
  ui : uiReducer,
  auth : authReducer
});

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
