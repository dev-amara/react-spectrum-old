import React from "react";
import { ArrayHelpers } from "formik";
import { Bank } from "../interfaces/Entreprise";
import {Country} from "../interfaces/Country";

export type BankInformationProps = {
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: Bank;
  countries: Country[];
  banks: Bank[];
  index: number;
  arrayHelpers: ArrayHelpers;
  items?: [];
};
