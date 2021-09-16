import { ArrayHelpers } from "formik";
import React from "react";
import { Entreprise } from "../interfaces/Entreprise";

export type BankInformationsProps = {
  values: Entreprise;
  arrayHelpers: ArrayHelpers;
  handleChange: (e: React.ChangeEvent<any>) => void;
};
