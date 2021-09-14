import React from "react";
import {
  Avatar,
  Badge,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

export type ProfileProps = {
  username: string;
  email: string;
  logo: string;
};

export const Profile: React.FC<ProfileProps> = (props) => {
  const { username, email, logo } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Badge variant="dot" color="primary">
          <Avatar src={logo} variant="rounded" />
        </Badge>
      </ListItemAvatar>
      <ListItemText primary={username} secondary={email} />
    </ListItem>
  );
};
