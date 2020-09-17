import React, { useState, useEffect } from "react";

import { Container, CoutryCard } from "./styles";

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

  return (
    <Container>
      <h1>Countries</h1>
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
  );
};

export default CountryList;
