import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItem, Menu, MenuItem } from "@material-ui/core";
import { textContent } from "../../utils/locales/fr";
import { Accounts } from "./constants";
import { Notification } from "../Notification/";
import MoreIcon from "@material-ui/icons/MoreVert";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Profile } from "../Profile";
import ImgLogo from "./assets/login3.png";

export type HeaderProps = {
  classes: any;
  toggleDrawer: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  media: boolean;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { classes, toggleDrawer, media } = props;
  const [open, setOpen] = toggleDrawer;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [displayNone, setDisplayNone] = React.useState<string>("inherit");
  const openMenu = Boolean(anchorEl);
  const authContext = useAuth();
  const history = useHistory();

  React.useEffect(() => {
    const { pathname } = history.location;
    if (pathname === "/_app/notifications") {
      setDisplayNone("none");
    } else {
      setDisplayNone("");
    }
  }, [history.location.pathname]);

  const handleDrawerOpen = () => setOpen(true);

  const handleMenuClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogoutClick = () => authContext.logout(history);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, open && classes.appBarShift)}
      color="inherit"
      elevation={0}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        />

        <Notification displayNone={displayNone} />

        <div className={clsx(media && classes.menuButtonHidden)}>
          <ListItem button onClick={handleMenuClick}>
            <Profile
              logo={ImgLogo}
              email={"kouakou.carine@gmail.com"}
              username={"Kouakou Ange Carine"}
            />
          </ListItem>
        </div>

        <IconButton
          className={clsx(!media && classes.menuButtonHidden)}
          aria-label="display more menu"
          edge="end"
          color="inherit"
          onClick={handleMenuClick}
        >
          <MoreIcon />
        </IconButton>

        <Menu open={openMenu} onClose={handleClose} anchorEl={anchorEl}>
          <MenuItem onClick={handleClose}>
            <ListItem disableGutters>
              <Profile
                logo={ImgLogo}
                email={"kouakou.carine@gmail.com"}
                username={"Kouakou Ange Carine"}
              />
            </ListItem>
          </MenuItem>

          <Divider />
          {Accounts.map((account, index) => {
            return (
              <MenuItem key={index} onClick={handleClose}>
                <ListItem disableGutters>
                  <Profile
                    logo={account.avatar}
                    email={account.email}
                    username={account.username}
                  />
                </ListItem>
              </MenuItem>
            );
          })}

          <MenuItem onClick={handleClose}>
            <IconButton color="inherit">
              <Badge variant="dot" color="error">
                <AiOutlineUserAdd />
              </Badge>
            </IconButton>
            <Typography variant="body2">
              {textContent.dashboard.addAccout}
            </Typography>
          </MenuItem>
        </Menu>

        <IconButton
          className={classes.iconButton}
          aria-label={textContent.dashboard.logout}
          edge="end"
          color="inherit"
          title={textContent.dashboard.logout}
          onClick={handleLogoutClick}
        >
          <PowerSettingsNewIcon titleAccess={textContent.dashboard.logout} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
