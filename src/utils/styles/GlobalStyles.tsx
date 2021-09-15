import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const GlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      height: "100%",
    },
    breadcrumbPaper: {
      background: "transparent",
    },
    selectField: {
      [`& .MuiSelect-outlined`]: {
        borderRadius: 0,
      },
    },
    bootstrapInput: {
      "& > *": {
        flexBasis: "47%",
        marginBottom: "1rem",
      },
    },
    buttonMaxWidth: {
      root: {
        minWidth: 31,
      },
    },
    formControl: {
      "&.MuiInputLabel-formControl": {
        transform: "translate(4px, 3px) scale(0.75)",
      },

      "&::placeholder": {
        backgroundColor: "red",
      },
    },
    alignSelf: {
      alignSelf: "end",
    },
    marginButton: {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    heightFull: {
      minHeight: "100%",
      height: "100% !important",
    },
    customerIcon: {
      width: "100%",
      margin: "0 auto",
      height: "auto",
    },
    imgFluid: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    flex: {
      display: "flex",
    },
    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    customerInfo: {
      height: "100%",
      overflow: "scroll",
    },
    formHelperText: {
      color: `${theme.palette.error.main} !important`,
      margin: ` 0 !important`,
    },
  }),
);