import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React from "react";
import ImgEbootLogo from "/assets/images/large-large.svg";
import clsx from "clsx";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { MainListItems } from "../Navigation";
import { MenuItem } from "../../utils/types";

export type SidebarProps = {
  classes: any;
  version: any;
  toggleDrawer: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  menuItems: MenuItem[];
};

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { classes, toggleDrawer, menuItems, version } = props;
  const [open, setOpen] = toggleDrawer;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
    >
      <div className={classes.toolbarIcon}>
        <div>
          <img src={ImgEbootLogo} alt="logo" />
        </div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <List style={{ lineHeight: "2.43" }}>
        <MainListItems menuItems={menuItems} />

        <Divider style={{ marginTop: open ? "5.875rem" : 0 }} />

        <ListItem button disableGutters className={classes.listItem}>
          <ListItemIcon>
            <AiOutlineSetting fontSize={20} color="black" />
          </ListItemIcon>
          <span>Paramètre</span>
        </ListItem>

        <ListItem button disableGutters className={classes.listItem}>
          <ListItemIcon>
            <IoIosHelpCircleOutline fontSize="1.25rem" color="black" />
          </ListItemIcon>
          <span>Aide</span>
        </ListItem>

        <ListItem
          disabled
          disableGutters
          className={classes.listItem}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10px",
          }}
        >
          <Typography variant="caption">V.{version}</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};
