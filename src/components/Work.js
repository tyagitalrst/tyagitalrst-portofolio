import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UHCard from './Card';
import Project from './Project';
import Urbanhire from '../img/uh.png';
import UrbanhireRes from '../img/uh-res.png';
import UrbanhireBlog from '../img/uh-blog.png';
import Hisana from '../img/hisana.png';
import Sumbangin from '../img/sumbangin.png';


const useStyles = makeStyles(theme => ({
    root: {
        margin: "40px 0 20px 0",
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
        textAlign: "center",
        padding: "40px 0",
    },
    jobTitle: {
        color: "rgb(230, 241, 255)",
        fontSize: "1.25rem",
        marginBottom: "0"
    },
    workAt: {
        color: '#03DAC6',
        fontSize: "1.25rem"
    },
    text: {
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        paddingLeft: "56px",
        fontWeight: "500"
    },
    date: {
        color: theme.palette.primary.contrastText,
        fontSize: ".875rem",
    },
    iconPad: {
        maxHeight: "24px",
        minHeight: "24px",
        position: "absolute"
    },
    tech: {
        color: theme.palette.info.main,
        fontFamily: "B612 Mono",
        fontSize: "12px",
        '& span': {
            color: theme.palette.secondary.main
        }
    },

}));

export default function Experience() {
    const classes = useStyles();

    return (
        <section id="work" className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h2 className={classes.intro}><span className={classes.smallIntro}>03.</span> Some Things I've Built</h2>
                    <Project
                        position={"left"}
                        title={"Hisana Scatter Map Visualization"}
                        detail={"Developed a website that help market and business intelligence to make decision by plotting market potential into maps and also the market share in every sub-district using NextJS - React framework with Redux as state management, and using Django-REST framework for the backend."}
                        tech={
                            <p className={classes.tech}>
                                NextJS <span>• </span>
                                Redux <span>• </span>
                                Material UI <span>• </span>
                                Django-REST
                            </p>}
                        link={"https://hisana.now.sh/"}
                        image={Hisana}
                        alt={"Hisana"}
                    />
                    <Project
                        position={"right"}
                        title={"Sumbang.in Apps"}
                        detail={"Developed a platform for donate pre-loved goods using Android in Java with Django-REST framework for the backend."}
                        tech={
                            <p className={classes.tech}>
                                Android <span>• </span>
                                Java <span>• </span>
                                Django-REST
                            </p>}
                        link={"https://hisana.now.sh/"}
                        image={Sumbangin}
                        alt={"Sumbangin"}
                    />
                    <Grid container
                        justify="center"
                        alignItems="center"
                        spacing={0}>
                        <Grid item sm={12} xs={12}>
                            <h2 className={classes.smallIntro}>My Intern Projects</h2>
                            <Grid container justify="center" spacing={3}>
                                <Grid item lg={4} sm={6} xs={12}>
                                    <UHCard
                                        photos={Urbanhire}
                                        link={"https://www.urbanhire.com/"}
                                        title={"Urbanhire Landing Page"}
                                        subtitle={"Less / Jade / JavaScript"} />
                                </Grid>
                                <Grid item lg={4} sm={6} xs={12}>
                                    <UHCard
                                        photos={UrbanhireRes}
                                        link={"https://resources.urbanhire.com/"}
                                        title={"Urbanhire Resources"}
                                        subtitle={"Wordpress / HTML5 / SASS / JavaScript"} />
                                </Grid>
                                <Grid item lg={4} sm={6} xs={12}>
                                    <UHCard
                                        photos={UrbanhireBlog}
                                        link={"https://www.urbanhire.com/blog/"}
                                        title={"Urbanhire Blog"}
                                        subtitle={"Wordpress / HTML5 / SASS / JavaScript"} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section >
    );
}
