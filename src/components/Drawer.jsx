import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreIcon from '@material-ui/icons/MoreVert';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faStar,
  faInbox,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import Bage from "./Badge";
import Profile from "./Profile"

import InputBase from "@material-ui/core/InputBase";

import "./Drawer.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    marginTop:"20px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawertoggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawertoggle}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar> */}

      </AppBar>
   
      <Drawer
        className="drawer"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        <Profile name="Rodrigo" subtitle="Mais um dia" img="1517421713742.jfif"></Profile>
          <IconButton onClick={handleDrawertoggle}>
            {/* revisar  botão guando esta fechado */}
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <List className="Menu">
          <ListItem button disableRipple key="Profile">
            <ListItemIcon>
              <FontAwesomeIcon icon={faStar} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem button disableRipple key="Tasks">
            <ListItemIcon>
              <FontAwesomeIcon icon={faTasks} />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>

          <ListItem button disableRipple key="Inbox">
            <ListItemIcon>
              <FontAwesomeIcon icon={faInbox} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            <Bage number="9"></Bage>
          </ListItem>

          <ListItem button disableRipple key="Search">
            <ListItemIcon>
              <FontAwesomeIcon icon={faSearch} />
            </ListItemIcon>

            <InputBase
              className={classes.input}
              placeholder="Search "
              inputProps={{ "aria-label": "search" }}
            />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}
