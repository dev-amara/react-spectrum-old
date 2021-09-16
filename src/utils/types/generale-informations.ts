import React from "react";
import { Entreprise } from "../interfaces/Entreprise";
import { Country } from "../interfaces/Country";

export type GeneraleInformationsProps = {
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: Entreprise;
  countries: Country[];
  folderId?: string;
  isEditing: any;
  isFetching: any;
};
