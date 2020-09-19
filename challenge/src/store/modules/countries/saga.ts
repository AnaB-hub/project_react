import { call, put } from "redux-saga/effects";

import { loadRequest, editCountry } from "./actions";
import api from "../../../services/api";

export interface Country {
  name: string;
  capital: string;
  flag: Flag;
}

interface Flag {
  svgFile: string;
  emoji: string;
}

export function* load() {
  let list: Country[] = [];
  try {
    // const requestUrl = "https://countries-274616.ew.r.appspot.com";
    // const response = yield call(api.post, requestUrl, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     query: `
    //   query {\n  Country {\n    name\n    nativeName\n    alpha2Code\n    alpha3Code\n    area\n    population\n    populationDensity\n    capital\n    demonym\n    gini\n    location {\n      latitude\n      longitude\n    }\n    numericCode\n    subregion {\n      name\n      region {\n        name\n      }\n    }\n    officialLanguages {\n      iso639_1\n      iso639_2\n      name\n      nativeName\n    }\n    currencies {\n      name\n      symbol\n    }\n    regionalBlocs {\n      name\n      acronym\n      otherAcronyms {\n        name\n      }\n      otherNames {\n        name\n      }\n    }\n    flag {\n      emoji\n      emojiUnicode\n      svgFile\n    }\n    topLevelDomains {\n      name\n    }\n    callingCodes {\n      name\n    }\n    alternativeSpellings {\n      name\n    }\n  }\n}\n`,
    //   }),
    // });

    // fetch("https://countries-274616.ew.r.appspot.com", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     query: `
    //     query {\n  Country {\n    name\n    nativeName\n    alpha2Code\n    alpha3Code\n    area\n    population\n    populationDensity\n    capital\n    demonym\n    gini\n    location {\n      latitude\n      longitude\n    }\n    numericCode\n    subregion {\n      name\n      region {\n        name\n      }\n    }\n    officialLanguages {\n      iso639_1\n      iso639_2\n      name\n      nativeName\n    }\n    currencies {\n      name\n      symbol\n    }\n    regionalBlocs {\n      name\n      acronym\n      otherAcronyms {\n        name\n      }\n      otherNames {\n        name\n      }\n    }\n    flag {\n      emoji\n      emojiUnicode\n      svgFile\n    }\n    topLevelDomains {\n      name\n    }\n    callingCodes {\n      name\n    }\n    alternativeSpellings {\n      name\n    }\n  }\n}\n`,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     list = res.data ? res.data.Country : [];
    //     // setCountries(res.data ? res.data.Country : []);
    //     // setCountriesReserva(res.data ? res.data.Country : []);
    //     console.log(list);
    // });
    console.log();
    // yield put(loadRequest(list));
  } catch (error) {
    // yield put(editCountry());
  }
}
