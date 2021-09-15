import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import { ErrorMessage, Field, FieldProps } from "formik";
import { InputBaseProps } from "@material-ui/core";
import _ from "lodash";
import { BootstrapInput } from "./components/BootstrapInput";
import { GlobalStyles } from "../../utils/styles";

export interface FieldSetProps extends InputBaseProps {
  type?: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  value?: string | number | boolean | null;
  component?: React.ComponentType;
  as?: string | React.ComponentType<FieldProps["field"]>;
  options?: any[];
  disabled?: boolean;
}

export const FieldSet: React.FC<FieldSetProps> = (props) => {
  const {
    name,
    placeholder,
    type,
    value,
    disabled,
    inputProps,
    ...other
  } = props;
  const classes = GlobalStyles();

  return (
    <Field name={name} type={type}>
      {({ field, form: { touched, errors } }: FieldProps) => {
        const touch = _.get(touched, name);
        const err = _.get(errors, name);

        return (
          <>
            <BootstrapInput
              {...other}
              placeholder={placeholder}
              {...field}
              value={value}
              error={touch && !!err}
              type={type}
              disabled={disabled}
            />
            <ErrorMessage
              name={name}
              component={FormHelperText}
              className={classes.formHelperText}
            />
          </>
        );
      }}
    </Field>
  );
};