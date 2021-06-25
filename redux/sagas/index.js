/*------- THE MAIN SAGA COMPONENT -------*/
import { all } from "redux-saga/effects";

/* IMPORT ALL SAGA WATCHERS */
import watchCountries from "./countriesSaga";

/* CREATE THE ROOT SAGA */
export default function* rootSaga() {
  yield all([watchCountries()]);
}