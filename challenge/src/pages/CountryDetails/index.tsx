import React, { useEffect } from "react";

import { Container } from "./styles";
import { useRouteMatch } from "react-router-dom";

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
    <Container>
      <h1>Hello {params.name}</h1>
    </Container>
  );
};

export default CountryDetails;
