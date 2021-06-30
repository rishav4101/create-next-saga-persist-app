export const ACTION_TYPES = {
  // Define Action types
  FETCH_COUNTRIES: "FETCH_COUNTRIES",
  COUNTRIES_FETCHED: "COUNTRIES_FETCHED"
};

// Create functions to handle your actions.
export const fetchCountriesAction = (countries) => ({
  type: ACTION_TYPES.COUNTRIES_FETCHED,
  payload: countries,
});

export default {
  fetchCountriesAction,
};
