import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import TyaIcon from '../img/tya-svg.svg';
import ResumeTya from '../file/CV_Tyagita.pdf';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import AppBarMobile from './AppbarMobile';

const useStyles = makeStyles(theme => ({
    icon: {
        flexGrow: 1,
        '& img': {
            width: "2.5vw",
            margin: "0 3vw"
        }
    },
    btn: {
        margin: "0 10px",
        fontFamily: "B612 Mono",
        textTransform: "unset",
        transition: "transform .2s",
        '&:hover': {
            '& >span': {
                transform: "scale(1.1)"
            }
        }
    },
    contrast: {
        color: theme.palette.secondary.main,
        margin: '0 4px',
    },
    btnResume: {
        textDecoration: "none"
    },
}));

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 960 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 959 })
    return isMobile ? children : null
}

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div>
            <Desktop>
                <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar>
                            <div className={classes.icon}>
                                <img src={TyaIcon} alt="icon" />
                            </div>
                            <Link to="about" spy={true} smooth={true} duration={800} offset={-50}>
                                <Button className={classes.btn} color="inherit">
                                    <span className={classes.contrast}>01.</span> About
                                </Button>
                            </Link>
                            <Link to="experience" spy={true} smooth={true} duration={1200} offset={-100}>
                                <Button className={classes.btn} color="inherit">
                                    <span className={classes.contrast}>02.</span> Experience
                                </Button>
                            </Link>
                            <Link to="work" spy={true} smooth={true} duration={800} offset={-50}>
                                <Button className={classes.btn} color="inherit">
                                    <span className={classes.contrast}>03.</span> Work
                                </Button>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} duration={1500} offset={-50}>
                                <Button className={classes.btn} color="inherit">
                                    <span className={classes.contrast}>04.</span> Contact
                                </Button>
                            </Link>
                            <a className={classes.btnResume} href={ResumeTya} download="CV_Tyagita.pdf">
                                <Button className={classes.btn} color="secondary" variant="outlined">Resume</Button>
                            </a>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </Desktop>
            <Mobile>
                <AppBarMobile />
            </Mobile>
        </div>
    );
}