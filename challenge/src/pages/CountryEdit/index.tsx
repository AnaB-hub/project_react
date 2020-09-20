import React, { useState, FormEvent, useEffect } from "react";

import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toast } from "react-toastify";

import { loadRequest } from "../../store/modules/countries/actions";
import { Container } from "./styles";
import CountryParams from "../../models/CountryParams";
import Input from "../../components/Input";
import LoadingComp from "../../components/loading/loading";
import BackButton from "../../components/backButton/backButton";

interface CountryEdit {
  name: string;
  capital: string;
  area: string;
  population: string;
  flag: Flag;
}

interface Flag {
  svgFile: string;
  emoji: string;
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
  const [flag, setFlag] = useState("");

  const [showLoad, setShowLoad] = useState(true);

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
          selected[0].population,
          selected[0].flag
        );
      } else {
        toast.error("País não encontrado");
        setShowLoad(false);
      }
      console.log("selected", selected);
      console.log("lista", countries.data);
    }
  }, [countries, params]);

  function setValuesEdit(
    name: string,
    capital: string,
    area: string,
    population: string,
    flag: Flag
  ): void {
    setShowLoad(false);
    setName(name);
    setCapital(capital);
    setArea(area);
    setPopulation(population);
    setFlag(flag.svgFile);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    if (handleCheckInputInvalid()) {
      toast.error("Formulário inválido! Preencha todos os campos");
      return;
    }

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
      toast.success("Alteração salva com sucesso");
      return;
    }
  }

  function handleCheckInputInvalid() {
    if (!!name && !!capital && !!area && !!population) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <h1>Editar o país: {params.name}</h1>
      {showLoad && <LoadingComp />}
      <Container onSubmit={handleSubmit}>
        <BackButton />
        <img src={flag} alt={flag} />
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="Nome"
            placeholder="Nome"
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
            name="População"
            placeholder="População"
          />
          <button type="submit">Salvar</button>
        </div>
      </Container>
    </>
  );
};

export default CountryEdit;
