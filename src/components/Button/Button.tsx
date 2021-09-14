import React from "react";
import { Omit } from "@material-ui/types";
import { Button as Btn, ButtonProps as BtnProps } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: (props: ButtonProps) =>
        props.background
          ? props.background
          : `linear-gradient(to left, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
      border: (props: ButtonProps) => (props.border ? props.border : "none"),
      borderRadius: (props: ButtonProps) =>
        props.borderRadius ? props.borderRadius : "4px",
      color: (props: ButtonProps) => (props.color ? props.color : "#fff"),
      height: (props: ButtonProps) => (props.height ? props.height : "initial"),
      width: (props: ButtonProps) => (props.width ? props.width : "initial"),
      margin: (props: ButtonProps) => (props.margin ? props.margin : "initial"),
      padding: (props: ButtonProps) =>
        props.padding ? props.padding : "0.438rem 2.438rem",
      textTransform: (props: ButtonProps) =>
        props.textTransform ? props.textTransform : "none",
      minWidth: (props: ButtonProps) => (props.minWidth ? props.minWidth : 0),
    },
  })
);

export interface ButtonProps {
  color?: string;
  background?: string;
  borderRadius?: number | string;
  border?: number | string;
  height?: number | string;
  width?: number | string;
  padding?: number | string;
  margin?: number | string;
  textTransform?: "lowercase" | "capitalize" | "none" | "uppercase";
  children: React.ReactNode;
  minWidth?: string | number;
}

export const Button: React.FC<
  ButtonProps & Omit<BtnProps, keyof ButtonProps>
> = (props) => {
  const { color, border, children, ...other } = props;
  const classes = useStyles(props);

  delete other.borderRadius;
  delete other.minWidth;

  return (
    <Btn className={classes.root} {...other}>
      {children}
    </Btn>
  );
};
