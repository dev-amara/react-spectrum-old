import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    card: {
      width: "400px",
      height: "700px",
      overflowY: "auto",
      overflowX: "hidden",
    },
    header: { display: "flex", justifyContent: "space-between" },
    badge: { position: "relative", top: "-15px" },
  }),
);

export { useStyles };
