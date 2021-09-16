import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { children } = props;
  const classes = useStylesAuthLayout();

  return (
    <div className={classes.root}>
      <Grid container className={classes.layoutBackground}>
        {children}
      </Grid>
    </div>
  );
};

const useStylesAuthLayout = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  layoutBackground: {
    backgroundImage:
      "url(../../../../assets/auth/images/circle_background.svg), url('../../../../assets/auth/images/courbe.svg')",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "75% 75%, contain",
    backgroundPosition: "-46rem 3rem, top right",
    [theme.breakpoints.down(768)]: {
      backgroundImage: "none",
      backgroundRepeat: "none",
      backgroundSize: "none",
      backgroundPosition: "none",
    },
  },
}));
