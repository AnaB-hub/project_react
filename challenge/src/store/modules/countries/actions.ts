// Actions: Funções que disparam os types (types.ts)
import { action } from "typesafe-actions";
import { CountriesTypes, Country } from "./types";

export const loadRequest = (data: Country[]) =>
  action(CountriesTypes.LOAD_REQUEST, { data });

export const editCountry = (data: Country[]) =>
  action(CountriesTypes.EDIT_COUNTRY, { data });
