import React, { useEffect } from "react";

import { Container, TitleField, ValueField } from "./styles";
import { useRouteMatch, Link } from "react-router-dom";

interface CountryParams {
  name: string;
}

const CountryDetails: React.FC = () => {
  const { params } = useRouteMatch<CountryParams>();

  useEffect(() => {
    console.log(params);
    //pesquisar pelo nome recuperado - redux
  }, [params.name]);

  return (
    <>
      <h1>Details: Nome do país</h1>
      <Container>
        <div>
          <img src="https://restcountries.eu/data/afg.svg" alt="" />

          <TitleField>Name</TitleField>
          <ValueField>123</ValueField>

          <TitleField>Capital</TitleField>
          <ValueField>123</ValueField>

          <TitleField>Area</TitleField>
          <ValueField>123</ValueField>

          <TitleField>Population</TitleField>
          <ValueField>123</ValueField>

          <TitleField>Top-level domain</TitleField>
          <ValueField>123</ValueField>
          {/* bandeira, nome, capital, área, população e top-level domain */}
        </div>
      </Container>
      <Link to="">Back</Link>
    </>
  );
};

export default CountryDetails;
