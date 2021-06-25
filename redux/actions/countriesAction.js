export const ACTION_TYPES = {
  FETCH_COUNTRIES: "FETCH_COUNTRIES",
  COUNTRIES_FETCHED: "COUNTRIES_FETCHED"
};

export const fetchCountriesAction = (countries) => ({
  type: ACTION_TYPES.COUNTRIES_FETCHED,
  payload: countries,
});

export default {
  fetchCountriesAction,
};
