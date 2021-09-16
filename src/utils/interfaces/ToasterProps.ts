import { SnackbarProps } from "@material-ui/core";

export interface ToasterProps extends SnackbarProps {
  open: boolean;
  handleClose?: any;
  severity: "success" | "info" | "warning" | "error";
  message: string;
}
