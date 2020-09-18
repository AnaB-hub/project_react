import { Reducer } from "redux";

import { CountryState, CountriesTypes } from "./types";

const INITIAL_STATE: CountryState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CountryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountriesTypes.LOAD_REQUEST:
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CountriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
