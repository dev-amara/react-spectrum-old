import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MenuItem } from "../../utils/types";

const drawerWidth = 240;

type DashboardLayoutProps = {
  children: React.ReactNode;
  menuItems: MenuItem[];
  version: any;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children, menuItems, version } = props;
  const classes = useStyles();
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    if (media) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [media]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header classes={classes} media={media} toggleDrawer={[open, setOpen]} />
      <Sidebar
        classes={classes}
        toggleDrawer={[open, setOpen]}
        menuItems={menuItems}
       version={version}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <>{children}</>
        </Container>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: 0,
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "none",
    },
  },
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 .5rem",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
    display: "inline-table",
    width: theme.breakpoints.down("sm"),
  },
  container: {
    padding: theme.spacing(3, 2, 0, 2),
    height: "100%",
    background: "#ebebeb",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  listItem: {
    display: "flex",
    paddingLeft: 24,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 17,
    },
  },
  listItemText: {
    fontSize: "0.7em",
  },
  iconButton: {
    marginRight: -2,
  },
  menuLineHeight: {
    lineHeight: "2.43",
  },
  childrenContainer: {
    background: "#fafafa",
  },
}));
