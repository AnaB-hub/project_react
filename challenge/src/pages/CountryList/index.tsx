import React, { useState, useEffect, FormEvent } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";

import { Search, CoutryCard } from "./styles";
import { Container } from "../CountryEdit/styles";
import { loadRequest } from "../../store/modules/countries/actions";
import LoadingComp from "../../components/loading/loading";
import { toast } from "react-toastify";

// bandeira, nome e capital
interface Country {
  name: string;
  capital: string;
  flag: Flag;
}

interface Flag {
  svgFile: string;
  emoji: string;
}

const CountryList: React.FC = () => {
  const countriesState = useSelector(
    (state: RootStateOrAny) => state.countries
  );
  const dispatch = useDispatch();

  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesReserva, setCountriesReserva] = useState<Country[]>([]);
  const [searchField, setSearchField] = useState("");

  const [showLoad, setShowLoad] = useState(true);

  useEffect(() => {
    if (countriesState && countriesState.data.length > 0) {
      setCountries(countriesState.data);
      setCountriesReserva(countriesState.data);
    } else {
      fetch("https://countries-274616.ew.r.appspot.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query {\n  Country {\n    name\n    nativeName\n    alpha2Code\n    alpha3Code\n    area\n    population\n    populationDensity\n    capital\n    demonym\n    gini\n    location {\n      latitude\n      longitude\n    }\n    numericCode\n    subregion {\n      name\n      region {\n        name\n      }\n    }\n    officialLanguages {\n      iso639_1\n      iso639_2\n      name\n      nativeName\n    }\n    currencies {\n      name\n      symbol\n    }\n    regionalBlocs {\n      name\n      acronym\n      otherAcronyms {\n        name\n      }\n      otherNames {\n        name\n      }\n    }\n    flag {\n      emoji\n      emojiUnicode\n      svgFile\n    }\n    topLevelDomains {\n      name\n    }\n    callingCodes {\n      name\n    }\n    alternativeSpellings {\n      name\n    }\n  }\n}\n`,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setCountries(res.data ? res.data.Country : []);
          setCountriesReserva(res.data ? res.data.Country : []);
          dispatch(loadRequest(res.data.Country));
        });
    }
  }, [countriesState, dispatch]);

  useEffect(() => {
    if (countries && countries.length > 0) {
      setShowLoad(false);
    }
  }, [countries]);

  // useEffect(() => {
  //   searchCountryAutoComplete();
  // }, [searchField]);

  // function searchCountryAutoComplete() {
  //   let countriesForFilter = countriesReserva;
  //   if (searchField) {
  //     let filtered = countriesForFilter.filter((country) =>
  //       country.name.toUpperCase().includes(searchField.toUpperCase())
  //     );
  //     if (filtered) setCountries(filtered);
  //   } else {
  //     setCountries(countriesReserva);
  //   }
  // }

  function searchCountry(e: FormEvent) {
    e.preventDefault();
    let countriesForFilter = countriesReserva;
    if (searchField) {
      let filtered = countriesForFilter.filter((country) =>
        country.name.toUpperCase().includes(searchField.toUpperCase())
      );
      setCountries(filtered);
    } else {
      toast.error("Informe um nome ou limpe a consulta");
    }
  }

  function clearSerachField(e: FormEvent) {
    e.preventDefault();
    setCountries(countriesReserva);
    setSearchField("");
  }

  function editCountry(name: string) {
    console.log(name);
  }

  return (
    <>
      <Container>
        <h1>Filter Countries</h1>
        <Search onSubmit={searchCountry}>
          <div>
            <label>Pesquise pelo nome de um país: </label>
            <input
              data-testid="search"
              type="text"
              placeholder=" Pesquise pelo nome de um país"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" data-testid="searchButton">
              Pesquisar
            </button>
            <button type="button" onClick={clearSerachField}>
              Limpar
            </button>
          </div>
        </Search>

        <h1>Lista de Países</h1>

        {showLoad && <LoadingComp />}

        {countries &&
          countries.map((country) => (
            <CoutryCard key={country.name}>
              <img src={country.flag.svgFile} alt={country.flag.emoji} />
              <div>
                <p>País: {country.name}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div>
                <Link
                  onClick={(_) => editCountry(country.name)}
                  to={`/details/${country.name}`}
                >
                  <BiDetail size={30} title="Detalhar" />
                </Link>
                <Link
                  onClick={(_) => editCountry(country.name)}
                  to={`/edit/${country.name}`}
                >
                  <AiFillEdit size={30} title="Editar" />
                </Link>
              </div>
            </CoutryCard>
          ))}
        {!countries && <p>A lista está vazia</p>}
      </Container>
    </>
  );
};

export default CountryList;
