import React from "react";
import {
  Avatar,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { makeStyles } from "@material-ui/core/styles";
import { truncateText } from "../../references";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "inherit",
    },
    paper: {
      margin: "auto 20%",
      minHeight: "47rem",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    divider: { margin: "auto 1rem" },
    displayList: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: 10,
    },
    iconItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    iconPosition: {
      marginTop: "-1.5rem",
    },
    card: {
      width: "100%",
    },
  })
);

export const NotificationItem: React.FC<{
  primary: string;
  secondary: string;
}> = (props) => {
  const { primary, secondary } = props;
  const classes = useStyles();

  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={truncateText(primary, {
          length: 1000,
          omission: "...",
        })}
        secondary={
          <Typography variant="subtitle2" color="secondary">
            {secondary}
          </Typography>
        }
      />
      <ListItemIcon className={classes.iconItem}>
        <Brightness1Icon color="secondary" viewBox="0 0 44 24" />
      </ListItemIcon>
    </ListItem>
  );
};
