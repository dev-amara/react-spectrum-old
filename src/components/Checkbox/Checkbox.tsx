import React from "react";
import { Checkbox as CheckBox, CheckboxProps } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "#13938f",
      "&$checked": {
        color: "#13938f",
      },
    },
    checked: {},
  })
);

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const classes = useStyles(props);

  return <CheckBox className={classes.root} color="default" {...props} />;
};
