import { takeEvery, put } from "redux-saga/effects";

function* fetchCountries() {
    const countriesData = yield fetch("https://restcountries.eu/rest/v2/lang/es/");
    const countries = yield countriesData.json()
    console.log(countries);
    yield put({ type: 'COUNTRIES_FETCHED', payload: countries})
}

export default function* watchCountries() {
    yield takeEvery("FETCH_COUNTRIES", fetchCountries);
}