import React, { useEffect } from "react";

import { Container, TitleField, ValueField } from "./styles";
import { useSelector, RootStateOrAny } from "react-redux";

interface DetailsProps {
  title: string;
  value: string;
}

interface Country {
  name: string;
  capital: string;
  flag: Flag;
}

interface Flag {
  svgFile: string;
  emoji: string;
}

const CountryDetailsItens: React.FC<DetailsProps> = ({
  title,
  value,
}: DetailsProps) => {
  const countries = useSelector((state: RootStateOrAny) => state.countries);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <Container>
      <TitleField>{title}: </TitleField>
      <ValueField>{value}</ValueField>
    </Container>
  );
};

export default CountryDetailsItens;
