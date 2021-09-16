import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { matchPath, NavLink, useLocation } from "react-router-dom";

type NavItemProps = {
  href: string;
  title: string;
  htmlBefore: any;
};

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { href, title, htmlBefore } = props;
  const location = useLocation();
  const classes = useStyles();

  const active = href
    ? !!matchPath(location.pathname, { path: href, exact: true })
    : false;

  return (
    <ListItem
      disableGutters
      selected={active}
      classes={{ selected: classes.bgActive }}
      className={classes.listItem}
      button
      component={NavLink}
      to={href}
    >
      <ListItemIcon className={classes.listItemIcon}>
        {htmlBefore.url}
      </ListItemIcon>
      <ListItemText primary={title} disableTypography />
    </ListItem>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  listItemIcon: {
    color: "currentColor",
  },
  img: {
    width: 20,
  },
  listItem: {
    display: "flex",
    paddingLeft: 24,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 17,
    },
  },
  bgActive: {
    color: theme.palette.secondary.main,
  },
}));
