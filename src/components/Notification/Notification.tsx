import {
  Badge,
  ClickAwayListener,
  Grow,
  IconButton,
  ListItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { textContent } from "../../utils/locales/fr";
import React from "react";
import { useStyles } from "./styles";
import { NOTIFICATIONS } from "./constants";
import CropFreeIcon from "@material-ui/icons/CropFree";
import { useHistory } from "react-router-dom";
import { NotificationItem } from "./NotificationItem";

export const Notification: React.FC<{ displayNone: any }> = ({
  displayNone,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    if (displayNone && displayNone === "none") {
      setOpen(false);
    }
  }, [displayNone]);

  const goToNotification = () => history.replace("/_app/notifications");

  return (
    <div className={classes.root} style={{ pointerEvents: displayNone ?? "" }}>
      <div>
        <IconButton
          color="inherit"
          title={textContent.dashboard.notification}
          ref={anchorRef}
          onClick={handleToggle}
        >
          <Badge color="error" badgeContent={NOTIFICATIONS.length}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    className={classes.card}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <ListItem className={classes.header}>
                      <Typography variant="h3">Notifications</Typography>
                      <IconButton onClick={goToNotification}>
                        <CropFreeIcon />
                      </IconButton>
                    </ListItem>

                    {NOTIFICATIONS.map(({ primary, secondary }, index) => {
                      return (
                        <NotificationItem
                          key={index}
                          primary={primary}
                          secondary={secondary}
                        />
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
