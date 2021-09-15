import { createStyles, InputBase, Theme, withStyles } from "@material-ui/core";

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: (props: any) =>
        props.error === true
          ? `1px solid ${theme.palette.error.main}`
          : `1px solid ${theme.palette.primary.main}`,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: (props: any) =>
          props.error ? theme.palette.error.main : theme.palette.primary.main,
        boxShadow: (props: any) =>
          props.error === true
            ? `0 0 0 0.2rem rgba(900, 147, 143, .25)`
            : `0 0 0 0.2rem rgba(19, 147, 143, .25)`,
      },
    },
  }),
)(InputBase);
