import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import { toast } from "react-toastify";

import { Container } from "./styles";
import CountryDetailsItens from "../../components/CountryDetailsItens/CountryDetailsItens";
import CountryParams from "../../models/CountryParams";
import LoadingComp from "../../components/loading/loading";
import BackButton from "../../components/backButton/backButton";

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
  const [showLoad, setShowLoad] = useState(true);

  useEffect(() => {
    if (countries) {
      let nameCountry = params.name;
      let selected = countries.data.filter((country: CountryDetail) =>
        country.name.toUpperCase().includes(nameCountry.toUpperCase())
      );
      if (selected && selected.length >= 1) {
        setShowLoad(false);
        console.log(selected[0]);
        setCountry(selected[0]);
      } else {
        toast.error("País não encontrado. Volte para a página inicial");
        setShowLoad(false);
      }
      console.log(countries.data);
    }
  }, [countries, params]);

  return (
    <>
      <h1>Detalhes do país: {params.name}</h1>
      {showLoad && <LoadingComp />}
      <Container>
        <div>
          {country && (
            <>
              <img src={country.flag.svgFile} alt="" />

              <CountryDetailsItens title="Name" value={country.name} />
              <CountryDetailsItens title="Capital" value={country.capital} />
              <CountryDetailsItens title="Area" value={country.area} />
              <CountryDetailsItens
                title="População"
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
        </div>
      </Container>
      <BackButton />
    </>
  );
};

export default CountryDetails;
