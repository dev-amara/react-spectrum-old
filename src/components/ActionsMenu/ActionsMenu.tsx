import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AiOutlineEye } from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import { ITEM_HEIGHT } from "./constants/constants";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      background: "#fff",
      boxShadow: "0px 3px 11px #00000017",
    },
    moreVertIcon: {
      transform: "rotate(90deg)",
    },
    optionIcon: {
      marginRight: "0.5rem",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export interface ActionsMenuProps {
  handleDelete?: (event: React.MouseEvent<HTMLElement>) => void;
  handleEdit?: (event: React.MouseEvent<HTMLElement>) => void;
  handleDetails?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = (props) => {
  const { handleDelete, handleEdit, handleDetails } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        className={classes.icon}
        onClick={handleClick}
        size="small"
      >
        <MoreVertIcon color="primary" className={classes.moreVertIcon} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <MenuItem onClick={handleDetails} className={classes.menuItem}>
          <AiOutlineEye className={classes.optionIcon} /> Details
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <TiPencil className={classes.optionIcon} /> Modifier
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <IoTrashOutline className={classes.optionIcon} /> Supprimer
        </MenuItem>
      </Menu>
    </div>
  );
};
