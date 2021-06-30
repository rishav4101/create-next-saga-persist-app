import { ACTION_TYPES } from "../actions/countriesAction";

// Define initial states.
const initialState = {
  countriesList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
      
    case ACTION_TYPES.COUNTRIES_FETCHED:
      console.log(action);
      return { ...state, countriesList: action.payload };

    default:
      return state;
  }
};
