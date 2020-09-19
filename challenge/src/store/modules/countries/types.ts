/**
 * Actions types
 */
export enum CountriesTypes {
  LOAD_REQUEST = "@countries/LOAD_REQUEST",
  EDIT_COUNTRY = "@countries/EDIT_COUNTRY",
}

/**
 * Data types
 */
export interface Country {
  name: string;
  capital: string;
  flag: Flag;
}

interface Flag {
  svgFile: string;
  emoji: string;
}

/**
 * State type
 */
export interface CountryState {
  readonly data: Country[];
  readonly loading: boolean;
  readonly error: boolean;
}
