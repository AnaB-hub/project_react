import React, { useState, FormEvent, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import { loadRequest } from "../../store/modules/countries/actions";
import { Container } from "./styles";
import CountryParams from "../../models/CountryParams";
import Input from "../../components/Input";

interface CountryEdit {
  name: string;
  capital: string;
  area: string;
  population: string;
}

const CountryEdit: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootStateOrAny) => state.countries);

  const { params } = useRouteMatch<CountryParams>();

  // Form fields
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [area, setArea] = useState("");
  const [population, setPopulation] = useState("");

  useEffect(() => {
    if (countries) {
      let nameCountry = params.name;
      let selected = countries.data.filter((country: CountryEdit) =>
        country.name.toUpperCase().includes(nameCountry.toUpperCase())
      );
      if (selected && selected.length >= 1) {
        console.log("edit", selected[0]);
        setValuesEdit(
          selected[0].name,
          selected[0].capital,
          selected[0].area,
          selected[0].population
        );
      } else {
        // TODO acusar erro
      }
      console.log("selected", selected);
      console.log("lista", countries.data);
    }
  }, [countries, params]);

  function setValuesEdit(
    name: string,
    capital: string,
    area: string,
    population: string
  ): void {
    setName(name);
    setCapital(capital);
    setArea(area);
    setPopulation(population);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    // if (handleCheckInputInvalid()) {
    //   //TODO mensagem de erro para campos
    //   return;
    // }

    const data = {
      name,
      capital,
      area,
      population,
    };

    console.log("tem obsjet", countries);

    const index = countries.data.findIndex((country: CountryEdit) => {
      return country.name.toUpperCase() === params.name.toUpperCase();
    });

    if (index >= 0) {
      let obj = countries.data[index];
      obj.name = name;
      obj.capital = capital;
      obj.area = area;
      obj.population = population;

      countries.data[index] = obj;

      //SETAR NO REDUX
      dispatch(loadRequest(countries.data));
    }
  }

  function handleCheckInputInvalid() {
    if (!!name && !!capital && !!area && !!population) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <h1>Edit country: {params.name}</h1>
      <Container onSubmit={handleSubmit}>
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="Name"
            placeholder="Name"
          />
          <Input
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            name="Capital"
            placeholder="Capital"
          />
          <Input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            name="Area"
            placeholder="Area"
          />
        </div>
        <div>
          <Input
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            name="Population"
            placeholder="Population"
          />
          <button type="submit">Save changes</button>
        </div>
      </Container>
      <Link to="/">Back</Link>
    </>
  );
};

export default CountryEdit;
