import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import TyaIcon from '../img/tya-svg.svg';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ResumeTya from '../file/CV_Tyagita.pdf';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  list: {
    width: "100%",
    textAlign: "center",
    display: "block",
    color: theme.palette.info.main,
  },
  numList: {
    color: theme.palette.secondary.main
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    width: '8vw',
  },
  btn: {
    margin: "0 10px",
    fontFamily: "B612 Mono",
    textTransform: "unset",
  },
  btnResume: {
    textDecoration: "none",
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper,
  },
  closeMenuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    color: theme.palette.secondary.main,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveDrawer() {
  const dummyCategories = ['About', 'Experience', 'Work', 'Contact']
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <Link to={text.toString().toLowerCase()} key={text} spy={true} smooth={true} duration={800} offset={-50}>
            <ListItem className={classes.list} button>
              <ListItemText className={classes.numList} primary={`0${index + 1}.`} />
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <div className={classes.content}>
              <img className={classes.icon} src={TyaIcon} alt="icon" />
            </div>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon fontSize="large" />
            </IconButton>
            {drawer}
            <a className={classes.btnResume} href={ResumeTya} download="CV_Tyagita.pdf">
              <Button className={classes.btn} color="secondary" variant="outlined">Resume</Button>
            </a>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default ResponsiveDrawer;