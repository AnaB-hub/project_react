import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Search, CoutryCard } from "./styles";
import { Container } from "../CountryEdit/styles";
import { load } from "../../store/modules/countries/saga";
import { loadRequest } from "../../store/modules/countries/actions";

// bandeira, nome e capital
interface Country {
  name: string;
  capital: string;
  flag: Flag;
}

interface Flag {
  svgFile: string;
  emoji: string;
}

const CountryList: React.FC = () => {
  const dispatch = useDispatch();

  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesReserva, setCountriesReserva] = useState<Country[]>([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://countries-274616.ew.r.appspot.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {\n  Country {\n    name\n    nativeName\n    alpha2Code\n    alpha3Code\n    area\n    population\n    populationDensity\n    capital\n    demonym\n    gini\n    location {\n      latitude\n      longitude\n    }\n    numericCode\n    subregion {\n      name\n      region {\n        name\n      }\n    }\n    officialLanguages {\n      iso639_1\n      iso639_2\n      name\n      nativeName\n    }\n    currencies {\n      name\n      symbol\n    }\n    regionalBlocs {\n      name\n      acronym\n      otherAcronyms {\n        name\n      }\n      otherNames {\n        name\n      }\n    }\n    flag {\n      emoji\n      emojiUnicode\n      svgFile\n    }\n    topLevelDomains {\n      name\n    }\n    callingCodes {\n      name\n    }\n    alternativeSpellings {\n      name\n    }\n  }\n}\n`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCountries(res.data ? res.data.Country : []);
        setCountriesReserva(res.data ? res.data.Country : []);
        dispatch(loadRequest(res.data.Country));
      });
  }, []);

  // useEffect(() => {
  //   console.log("countries", countries);
  // }, [countries]);

  function searchCountry() {
    if (searchField) {
      let filtered = countries.filter((country) =>
        country.name.toUpperCase().includes(searchField.toUpperCase())
      );
      setCountries(filtered);
    } else {
      // TODO acusar erro e pedir para digitar um valor
    }
  }

  function clearSerachField() {
    setCountries(countriesReserva);
    setSearchField("");
  }

  function editCountry(name: string) {
    console.log(name);
  }

  return (
    <>
      <Container>
        <h1>Countries</h1>
        <Search>
          <label>Search for a country name: </label>
          <input
            type="text"
            placeholder=" Search for a country name"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <button type="button" onClick={searchCountry}>
            Search
          </button>
          <button type="button" onClick={clearSerachField}>
            Clear search field
          </button>
        </Search>
        {countries &&
          countries.map((country) => (
            <CoutryCard key={country.name}>
              <img src={country.flag.svgFile} alt={country.flag.emoji} />
              <div>
                <p>Country: {country.name}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div>
                <Link
                  onClick={(_) => editCountry(country.name)}
                  to={`/details/${country.name}`}
                >
                  Details
                </Link>
                <Link
                  onClick={(_) => editCountry(country.name)}
                  to={`/edit/${country.name}`}
                >
                  Edit
                </Link>
              </div>
            </CoutryCard>
          ))}
      </Container>
    </>
  );
};

export default CountryList;
