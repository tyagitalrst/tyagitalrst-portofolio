import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Jumbotron from './Jumbotron';
import About from './About';
import Social from './Social';
import Email from './Email';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "B612 Mono",
        width: "100%",
    },
    rootMobile: {
        padding: "0 24px",
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

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Desktop>
                    <Grid container spacing={0}>
                        <Grid item lg={2} md={2}>
                            <Social />
                        </Grid>
                        <Grid item lg={8} md={8}>
                            <Jumbotron />
                            <About />
                            <Experience />
                            <Work />
                            <Contact />
                        </Grid>
                        <Grid item lg={2} md={2}>
                            <Email />
                        </Grid>
                    </Grid>
                </Desktop>
                <Mobile>
                    <Grid container spacing={0} className={classes.rootMobile}>
                        <Grid item>
                            <Jumbotron />
                            <About />
                            <Experience />
                            <Work />
                            <Contact />
                        </Grid>
                        <Grid item>
                            <Social />
                        </Grid>
                    </Grid>
                </Mobile>
            </div>
        </div>
    );
}