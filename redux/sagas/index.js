import { all } from "redux-saga/effects";
import watchCountries from "./countriesSaga";

export default function* rootSaga() {
  yield all([watchCountries()]);
}