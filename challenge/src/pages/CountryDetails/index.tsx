import React, { useEffect, useState } from "react";

import { useRouteMatch, Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";

import { Container } from "./styles";
import CountryDetailsItens from "../../components/CountryDetailsItens/CountryDetailsItens";
import CountryParams from "../../models/CountryParams";

interface CountryDetail {
  name: string;
  capital: string;
  area: string;
  population: string;
  flag: Flag;
  topLevelDomains: TopLevelDomain[];
}

interface Flag {
  svgFile: string;
  emoji: string;
}

interface TopLevelDomain {
  name: string;
}

const CountryDetails: React.FC = () => {
  const countries = useSelector((state: RootStateOrAny) => state.countries);

  const { params } = useRouteMatch<CountryParams>();

  const [country, setCountry] = useState<CountryDetail>();

  useEffect(() => {
    if (countries) {
      let nameCountry = params.name;
      let selected = countries.data.filter((country: CountryDetail) =>
        country.name.toUpperCase().includes(nameCountry.toUpperCase())
      );
      if (selected && selected.length >= 1) {
        console.log(selected[0]);
        setCountry(selected[0]);
      } else {
        // TODO acusar erro
      }
      console.log(countries.data);
    }
  }, [countries, params]);

  // useEffect(() => {
  //   console.log(params);
  //   //pesquisar pelo nome recuperado - redux
  // }, [params]);

  return (
    <>
      <h1>Details: {params.name}</h1>
      <Container>
        <div>
          {country && (
            <>
              <img src={country.flag.svgFile} alt="" />

              <CountryDetailsItens title="Name" value={country.name} />
              <CountryDetailsItens title="Capital" value={country.capital} />
              <CountryDetailsItens title="Area" value={country.area} />
              <CountryDetailsItens
                title="Population"
                value={country.population}
              />
              {country.topLevelDomains &&
                country.topLevelDomains.map(
                  (topLevelDomain: TopLevelDomain) => (
                    <CountryDetailsItens
                      key={topLevelDomain.name}
                      title="Top-level domain"
                      value={topLevelDomain.name}
                    />
                  )
                )}
            </>
          )}

          {/* bandeira, nome, capital, área, população e top-level domain */}
        </div>
      </Container>
      <Link to="">Back</Link>
    </>
  );
};

export default CountryDetails;
