import React, { useState, useEffect } from "react";

import { Container, Search, CoutryCard } from "./styles";

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
      });
  }, []);

  // For testes
  // useEffect(() => {
  //   console.log("countries", countries);
  // }, [countries]);

  function searchCountry() {
    if (searchField) {
      setCountriesReserva(countries);
      let filtered = countries.filter(
        (country) => country.name.toUpperCase() === searchField.toUpperCase()
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

  return (
    <>
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
      <Container>
        {countries &&
          countries.map((country) => (
            // TODO receber atributos separadamente
            <CoutryCard key={country.name}>
              <img src={country.flag.svgFile} alt={country.flag.emoji} />
              <div>
                <p>Country: {country.name}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </CoutryCard>
          ))}
      </Container>
    </>
  );
};

export default CountryList;