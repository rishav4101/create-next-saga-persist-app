/*------- THIS IS THE MAIN REDUCER COMPONENT -------*/

import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

/* IMPORT ALL REDUCERS HERE */
import countries from "./countries";

// If it is client side or not. (window is defined or not)
const isClient = typeof window !== "undefined";

let mainReducer;
if (isClient) {
  // Client side logic.

  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  // Root persist configuration.
  const rootPersistConfig = {
    key: "root",
    storage: storage,
    // blacklist the states for which nested persist configs you are going to define.
    // --OR-- You might use whitelist if you want to persist all states of seleted reducers.
    blacklist: ["countries"],
  };

  // Persist config for each of reducers you create.
  const countriesPersistConfig = {
    key: "countries",
    storage: storage,
    // whitelist OR blacklist states according to your need.
    whitelist: ["countriesList"],
  };

  /* COMBINE ALL REDUCERS */
  const combinedReducers = combineReducers({
    countries: persistReducer(countriesPersistConfig, countries),
  });

  // Main Reducer if in client side.
  mainReducer = persistReducer(rootPersistConfig, combinedReducers);
} else {
  //Server side logic.

  // Main Reducer if in client side.
  mainReducer = combineReducers({
    countries,
  });
}

function reducer(state, action) {
  switch (action.type) {
    /* ON HYDRATE */
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      if (state.countries) nextState.countries = state.countries; // Preserve state during client side navigations.
      return nextState;

    default:
      return mainReducer(state, action);
  }
}

export default reducer;
