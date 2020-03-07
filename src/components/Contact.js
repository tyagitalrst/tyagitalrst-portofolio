import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        margin: "40px 0 20px 0",
        padding: "80px 0",
        fontFamily: "Lato",
        minHeight: "85vh",
        textAlign: "center",
    },
    intro: {
        color: theme.palette.secondary.contrastText,
        fontWeight: "600",
        fontSize: "32px",
    },
    smallIntro: {
        color: theme.palette.secondary.main,
        fontSize: "20px",
        fontFamily: "B612 Mono",
    },
    text: {
        color: theme.palette.info.main,
        fontSize: "1.125rem",
    },
    btn: {
        textTransform: "unset",
        fontFamily: "B612 Mono",
        marginTop: "25px",
    },
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <section id="contact"
            className={classes.root}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="700"
            data-aos-offset="0">
            <Grid container
                justify="center"
                alignItems="center"
                spacing={0}>
                <Grid item lg={8} xs={12}>
                    <h2 className={classes.intro}><span className={classes.smallIntro}>04.</span> Contact Me</h2>
                    <p className={classes.text}>
                        My inbox is always open. <br />
                        I'll try my best to answer your email! <br />
                    </p>
                    <Button href="mailto:tyagitalarasati@gmail.com" className={classes.btn} color="secondary" variant="outlined">Say Hello</Button>
                </Grid>
            </Grid>
        </section >
    );
}
