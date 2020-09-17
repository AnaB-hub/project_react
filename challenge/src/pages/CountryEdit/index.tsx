import React, { useState, FormEvent } from "react";

import { Link, useRouteMatch } from "react-router-dom";

import { Container } from "./styles";
import Input from "../../components/Input";
import CountryParams from "../../models/CountryParams";

const CountryEdit: React.FC = () => {
  const { params } = useRouteMatch<CountryParams>();

  // Form fields
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [area, setArea] = useState("");
  const [population, setPopulation] = useState("");
  const [topLevelDomain, setTopLevelDomain] = useState("");

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    alert("Caiu aqui");
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
            value={name}
            onChange={(e) => setCapital(e.target.value)}
            name="Capital"
            placeholder="Capital"
          />
          <Input
            value={name}
            onChange={(e) => setArea(e.target.value)}
            name="Area"
            placeholder="Area"
          />
        </div>
        <div>
          <Input
            value={name}
            onChange={(e) => setPopulation(e.target.value)}
            name="Population"
            placeholder="Population"
          />
          <Input
            value={name}
            onChange={(e) => setTopLevelDomain(e.target.value)}
            name="Top-level domain"
            placeholder="Top-level domain"
          />
          <button type="submit">Save changes</button>
        </div>
      </Container>
      <Link to="/">Back</Link>
    </>
  );
};

export default CountryEdit;
