import React, { useEffect } from "react";

import { useRouteMatch, Link } from "react-router-dom";

import { Container } from "./styles";
import CountryDetailsItens from "../../components/CountryDetailsItens/CountryDetailsItens";
import CountryParams from "../../models/CountryParams";

const CountryDetails: React.FC = () => {
  const { params } = useRouteMatch<CountryParams>();

  // useEffect(() => {
  //   console.log(params);
  //   //pesquisar pelo nome recuperado - redux
  // }, [params]);

  return (
    <>
      <h1>Details: {params.name}</h1>
      <Container>
        <div>
          <img src="https://restcountries.eu/data/afg.svg" alt="" />

          <CountryDetailsItens title="Name" value="teste" />
          <CountryDetailsItens title="Capital" value="teste123" />
          <CountryDetailsItens title="Area" value="123" />
          <CountryDetailsItens title="Population" value="123" />
          <CountryDetailsItens title="Top-level domain" value="123" />

          {/* bandeira, nome, capital, área, população e top-level domain */}
        </div>
      </Container>
      <Link to="">Back</Link>
    </>
  );
};

export default CountryDetails;
