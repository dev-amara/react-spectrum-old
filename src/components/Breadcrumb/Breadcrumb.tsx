import React from "react";
import {
  Breadcrumbs,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

export interface BreadcrumbProps {
  title: string;
  secondLabel: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    breadcrumbPaper: {
      background: "transparent",
    },
  })
);

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { title, secondLabel } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.breadcrumbPaper} elevation={0}>
        <Typography variant="h3">{title}</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="inherit">{title}</Typography>
          <Typography color="secondary">{secondLabel}</Typography>
        </Breadcrumbs>
      </Paper>
    </Grid>
  );
};
