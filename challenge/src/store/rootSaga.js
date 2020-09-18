import { all, takeLatest } from "redux-saga/effects";

import { CountriesTypes } from "./modules/countries/types";
import { load } from "./modules/countries/saga";

export default function* rootSaga() {
  return yield all([takeLatest(CountriesTypes.LOAD_REQUEST, load)]);
}
