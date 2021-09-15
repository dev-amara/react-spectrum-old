import { ErrorMessage, FieldProps } from "formik";
import _ from "lodash";
import React from "react";
import Select from "react-select";
import { FormHelperText } from "@material-ui/core";
import { GlobalStyles } from "../../utils/styles";

export const ComboBox: React.FC<Select & FieldProps> = (props: any) => {
  const classes = GlobalStyles();
  const { options, field, form, placeholder } = props;

  const touch = _.get(form.touched, field.name);
  const err = _.get(form.errors, field.name);

  const styles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      borderRadius: 0,
    }),

    control: (base: any, state: any) => ({
      ...base,
      height: 42,
      borderRadius: "0",
      borderColor: touch && !!err ? "red" : "#13938F",
      boxShadow: state.isFocused
        ? "0 0 0 0.2rem rgba(19, 147, 143, .25)"
        : "none",
      "&:hover": {
        border: touch && !!err ? "1px solid red" : "1px solid #13938F",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected ? "#13938F" : "initial",
      borderRadius: "0",
      "&:hover": {
        background: "rgba(19, 147, 143, .25)",
      },
    }),
  };

  return (
    <>
      <Select
        placeholder={placeholder}
        options={options}
        name={field.name}
        error={Boolean(touch && err)}
        value={
          options
            ? options.find((option: any) => option.value === field.value)
            : ""
        }
        onChange={(option: any) => form.setFieldValue(field.name, option.value)}
        styles={styles}
      />
      <ErrorMessage
        name={field.name}
        component={FormHelperText}
        className={classes.formHelperText}
      />
    </>
  );
};
