import { takeEvery, put, delay } from "redux-saga/effects";
import { fetchCountriesAction, ACTION_TYPES } from "../actions/countriesAction";

function* fetchCountries() {
    const countriesData = yield fetch(`${process.env.NEXT_PUBLIC_COUNTRIES_URL}`);
    yield delay(5000); // TO TEST STATE PERSIST ON REFRESH -- The UI and Data shall update 5 seconds later.
    const countries = yield countriesData.json()
    console.log(countries);
    yield put(fetchCountriesAction(countries));
}

export default function* watchCountries() {
    yield takeEvery(ACTION_TYPES.FETCH_COUNTRIES, fetchCountries);
}