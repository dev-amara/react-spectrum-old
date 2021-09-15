import React from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import { STATUS } from "./constants/status";

export interface StatuschipProps {
  color?: string;
  label?: string;
  background?: string;
  children?: React.ReactNode;
  status?: string;
}

export const Statuschip = withStyles((theme: Theme) => ({
  root: {
    background: (props: StatuschipProps) => {
      const { label } = props;
      if (label === STATUS.IN_PROGESS || label === STATUS.CUSTOMIZED) {
        return "#f6efe7";
      }
      if (label === STATUS.CANCELLED) {
        return "#ffefed";
      }

      if (
        label === STATUS.COMPLETED ||
        label === STATUS.RECLAIMED ||
        label === STATUS.CONNECTED
      ) {
        return "#ebf3f1";
      }

      return "initial";
    },
    border: (props: StatuschipProps) => {
      const { label } = props;
      if (label === STATUS.IN_PROGESS || label === STATUS.CUSTOMIZED) {
        return `1px solid ${theme.palette.warning.light}`;
      }
      if (label === STATUS.CANCELLED) {
        return `1px solid ${theme.palette.error.light}`;
      }

      if (
        label === STATUS.COMPLETED ||
        label === STATUS.RECLAIMED ||
        label === STATUS.CONNECTED
      ) {
        return `1px solid #3ca896`;
      }

      return "none";
    },
    color: (props: StatuschipProps) => {
      const { label } = props;
      if (label === STATUS.IN_PROGESS || label === STATUS.CUSTOMIZED) {
        return theme.palette.warning.light;
      }
      if (label === STATUS.CANCELLED) {
        return theme.palette.error.light;
      }

      if (
        label === STATUS.COMPLETED ||
        label === STATUS.RECLAIMED ||
        label === STATUS.CONNECTED
      ) {
        return "#3ca896";
      }

      return "initial";
    },
  },
}))(Chip);
