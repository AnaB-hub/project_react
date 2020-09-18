// Actions: Funções que disparam os types (types.ts)
import { action } from "typesafe-actions";
import { CountriesTypes, Country } from "./types";

export const loadRequest = (data: Country[]) =>
  action(CountriesTypes.LOAD_REQUEST, { data });

export const loadFailure = () => action(CountriesTypes.LOAD_FAILURE);
