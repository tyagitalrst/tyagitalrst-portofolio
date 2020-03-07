import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Lato",
        bottom: "0px",
        position: "fixed",
        width: "15vw",
        right: "5px",
        textAlign: "center",
        '&::after': {
            content: "''",
            display: "block",
            width: "2px",
            height: "55px",
            backgroundColor: theme.palette.info.main,
        },
        '& a':{
            color: theme.palette.info.main,
            writingMode: "vertical-rl",
            textOrientation: "sideways-right",
            letterSpacing: "2px",
            textDecoration: "none",
            transition: "transform .2s",
            '&:hover, &:active':{
                color: theme.palette.success.main,
                fontWeight: "bold",
                transform: "scale(1.1)"
            }
        }
    },
}));

export default function Email() {
    const classes = useStyles();

    return (
        <section id="email">
            <Grid container
                spacing={5}
                direction="column"
                justify="space-evenly"
                alignItems="center"
                className={classes.root}>
                <Grid item>
                    <a href="mailto:tyagitalarasati@gmail.com" className={classes.email}>tyagitalarasati@gmail.com</a>
                </Grid>
            </Grid>
        </section>
    );
}
