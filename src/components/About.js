import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfPict from '../img/profict.png';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    root: {
        margin: "20px 0 20px 0",
        padding: "80px 0",
        fontFamily: "Lato",
        minHeight: "85vh",
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
    profpict: {
        margin: "50% 0",
        width: "300px",
        filter: "grayscale(40%)",
        transition: "transform 1s",
        '&:hover': {
            filter: "none"
        }
    },
    text: {
        color: theme.palette.info.main,
        fontSize: "1.125rem",
    },
    imgTech: {
        width: "60px",
        height: "60px",
        filter: "grayscale(50%)",
        transition: "transform .2s",
        '&:hover': {
            filter: "none",
            transform: "scale(1.2)"
        }
    },
    imgTech1: {
        width: "auto",
        height: "60px",
        filter: "grayscale(50%)",
        transition: "transform .2s",
        '&:hover': {
            filter: "none",
            transform: "scale(1.2)"
        }
    },


}));

export default function About() {
    const classes = useStyles();

    return (
        <section id="about"
            className={classes.root}
            data-aos="fade-up"
            data-aos-duration="1000">
            <Grid container spacing={0}>
                <Grid item lg={8} xs={12}>
                    <h2 className={classes.intro}><span className={classes.smallIntro}>01.</span> About Me</h2>
                    <p className={classes.text}>
                        Hi! I'm Tya, a final computer science student based in Jakarta.<br />
                        I have high curiosity and willingness to learn. I'm really interested<br />
                        with web and mobile development. I like to translating design into code<br />
                        and making sure the functionality works well based on the usabality.<br />
                    </p>
                    <p className={classes.text}>Here are a few technologies I've been working with recently:</p>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="SASS">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" alt="sass" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="LESS">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/less.svg" alt="less" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="HTLM5">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/html-5.svg" alt="html" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="CSS3">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="css" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Jade">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/jade-3.svg" alt="jade" />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Java">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/java.svg" alt="java" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="React">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="react" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Django">
                                <img className={classes.imgTech} src="https://cdn.iconscout.com/icon/free/png-512/django-11-1175036.png" alt="django" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Python">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="python" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="JavaScript">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/javascript-4.svg" alt="js" />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="NextJS">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" alt="next" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="jQuery">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/jquery-1.svg" alt="jquery" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Postgresql">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="sql" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Git">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="git" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Django-REST">
                                <img className={classes.imgTech1} src="https://static.cdn-cdpl.com/source/214/logo-image(700x350-crop).png" alt="rest" />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Kotlin">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" alt="kotlin" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Android Studio">
                                <img className={classes.imgTech} src="https://i.ya-webdesign.com/images/android-studio-png.png" alt="android" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Figma">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="figma" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Invision">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/invision.svg" alt="invision" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Trello">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/trello.svg" alt="trello" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <Tooltip title="Jira">
                                <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" alt="jira" />
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <img className={classes.profpict} src={ProfPict} alt="profpict" />
                </Grid>
            </Grid>
        </section >
    );
}
