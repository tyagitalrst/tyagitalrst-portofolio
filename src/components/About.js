import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfPict from '../img/profict.svg';

const useStyles = makeStyles(theme => ({
    root: {
        margin: "10vh 0",
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
        '&:hover': {
            filter: "none"
        }
    },
    text: {
        color: theme.palette.info.main,
        fontSize: "1.125rem",
    },
    imgTech: {
        width: "auto",
        height: "60px",
        filter: "grayscale(50%)",
        '&:hover': {
            filter: "none"
        }
    },


}));

export default function About() {
    const classes = useStyles();

    return (
        <section id="about" className={classes.root}>
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
                            <img className={classes.imgTech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/200px-Sass_Logo_Color.svg.png" alt="sass" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://miro.medium.com/max/672/1*O_NwDtfHb1sirw6CAbyoxg.png" alt="less" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://upload.wikimedia.org/wikipedia/commons/2/21/Devicon-html5-plain-wordmark.svg" alt="html" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="http://1.bp.blogspot.com/-898JqWtZQyg/Ul0w5wvvXaI/AAAAAAAAAWc/OuSAxsJtAz8/s1600/CSS3.png" alt="css" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/jade-3.svg" alt="jade" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://www.freepngimg.com/thumb/java/85390-java-language-text-programming-logo-programmer.png" alt="java" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" alt="react" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://cdn.iconscout.com/icon/free/png-512/django-11-1175036.png" alt="django" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png" alt="python" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://mail.easyprogramming.net/logo/js.png" alt="js" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" alt="next" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://cdn.iconscout.com/icon/free/png-512/jquery-8-1175153.png" alt="jquery" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://cdn.iconscout.com/icon/free/png-512/postgresql-226047.png" alt="sql" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://static.cdn-cdpl.com/source/214/logo-image(700x350-crop).png" alt="rest" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://miro.medium.com/max/405/1*rM5eV-GbkiHgpD3MV-H6Hg.png" alt="kotlin" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png" alt="android" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://camo.githubusercontent.com/4fc4dd8df88ded608468defa8fbc0ef0641e8442/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67" alt="figma" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://cdn.worldvectorlogo.com/logos/invision.svg" alt="invision" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://www.stickpng.com/assets/images/58482beecef1014c0b5e4a36.png" alt="trello" />
                        </Grid>
                        <Grid item xs={4} lg={2}>
                            <img className={classes.imgTech} src="https://lh3.googleusercontent.com/GkgChJMixx9JAmoUi1majtfpjg1Ra86gZR0GCehJfVcOGQI7Ict_TVafXCtJniVn3R0" alt="jira" />
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
