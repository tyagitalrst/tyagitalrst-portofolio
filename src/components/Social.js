import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import github from '../img/github.svg';
import insta from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
import mail from '../img/mail.svg';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Lato",
        bottom: "0px",
        position: "fixed",
        textAlign: "center",
        width: "15vw",
        '&::after': {
            content: "''",
            display: "block",
            width: "2px",
            height: "120px",
            backgroundColor: theme.palette.info.main,
        },
    },
    icon: {
        height: '20px',
        transition: "transform .2s",
        '&:hover':{
            transform: "scale(1.5)"
        }
    },
    rootMobile: {
        fontFamily: "Lato",
        height: "10vh",
        minWidth: "105vw",
        textAlign: "center",
        backgroundColor: theme.palette.success.main,
    }
}));

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 960 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 959 })
    return isMobile ? children : null
}

export default function Social() {
    const classes = useStyles();

    return (
        <section id="social">
            <Desktop>
                <Grid container
                    spacing={5}
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    className={classes.root}>
                    <Grid item>
                        <a href="https://github.com/tyagitalrst" target="_blank" rel="noopener noreferrer">
                            <img className={classes.icon} src={github} alt="github" />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.linkedin.com/in/tyagitalrst/" target="_blank" rel="noopener noreferrer">
                            <img className={classes.icon} src={linkedin} alt="linkedin" />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.instagram.com/tyagitalrst/" target="_blank" rel="noopener noreferrer">
                            <img className={classes.icon} src={insta} alt="instagram" />
                        </a>
                    </Grid>
                </Grid>
            </Desktop>
            <Mobile>
                <Grid container
                    spacing={4}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    className={classes.rootMobile}>
                    <Grid item md={3}>
                        <a href="https://github.com/tyagitalrst" target="_blank" rel="noopener noreferrer">
                            <img className={classes.icon} src={github} alt="github" />
                        </a>
                    </Grid>
                    <Grid item md={3}>
                        <a href="https://www.linkedin.com/in/tyagitalrst/" target="_blank" rel="noopener noreferrer">
                            <img className={classes.icon} src={linkedin} alt="linkedin" />
                        </a>
                    </Grid>
                    <Grid item md={3}>
                        <a href="https://www.instagram.com/tyagitalrst/" target="_blank" rel="noopener noreferrer">
                            <img className={classes.icon} src={insta} alt="instagram" />
                        </a>
                    </Grid>
                    <Grid item md={3}>
                        <a href="mailto:tyagitalarasati@gmail.com">
                            <img className={classes.icon} src={mail} alt="mail" />
                        </a>
                    </Grid>
                </Grid>
            </Mobile>
        </section>
    );
}
