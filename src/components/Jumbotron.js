import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        margin: "25vh 0 0",
        fontFamily: "Lato",
        minHeight: "80vh",
    },
    greeting: {
        color: theme.palette.secondary.main,
        fontSize: "18px",
        fontFamily: "B612 Mono",
        fontWeight: "normal",
        margin: "0;"
    },
    name: {
        color: theme.palette.warning.main,
        fontSize: "80px",
        fontWeight: "600",
        margin: "0px 0px -10px 0px;"
    },
    role: {
        color: theme.palette.info.main,
        fontSize: "80px",
        fontWeight: "600",
        margin: "0 0 20px 0"
    },
    subtitle: {
        color: theme.palette.info.main,
        fontSize: "20px",
    },
    btn: {
        textTransform: "unset",
        fontFamily: "B612 Mono",
        marginTop: "25px",
    },



}));

export default function Jumbotron() {
    const classes = useStyles();

    return (
        <section id="intro" className={classes.root}>
            <h2 className={classes.greeting}>Hi, my name is</h2>
            <h2 className={classes.name}>
                Tyagita Larasati.
            </h2>
            <h3 className={classes.role}>
                I'm a software engineer.
            </h3>
            <p className={classes.subtitle}>
                I'm a final year computer science student based in Jakarta. <br />
                Highly interested in web and mobile development.<br />
            </p>
            <Button className={classes.btn} color="secondary" variant="outlined" href="mailto:tyagitalarasati@gmail.com">
                Get in touch
            </Button>
        </section >
    );
}
