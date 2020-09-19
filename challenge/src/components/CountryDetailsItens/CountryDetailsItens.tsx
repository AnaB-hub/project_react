import React from "react";

import { Container, TitleField, ValueField } from "./styles";

interface DetailsProps {
  title: string;
  value: string;
}

const CountryDetailsItens: React.FC<DetailsProps> = ({
  title,
  value,
}: DetailsProps) => {
  return (
    <Container>
      <TitleField>{title}: </TitleField>
      <ValueField>{value}</ValueField>
      <hr></hr>
    </Container>
  );
};

export default CountryDetailsItens;
