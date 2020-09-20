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
      <TitleField data-testid="titleField">{title}: </TitleField>
      <ValueField data-testid="valueField">{value}</ValueField>
      <hr></hr>
    </Container>
  );
};

export default CountryDetailsItens;
