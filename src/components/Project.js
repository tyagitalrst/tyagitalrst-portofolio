import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
    root: {
        padding: "40px 0 40px",
        '& img': {
            width: "100%",
            filter: "grayscale(40%)",

            '&:hover': {
                filter: "none"
            }
        }
    },
    detail1: {
        marginRight: "-10%",
        zIndex: "1"
    },
    detail2: {
        textAlign: "right",
        marginLeft: "-10%",
        zIndex: "1"
    },
    titleDetail: {
        color: theme.palette.secondary.main
    },
    titleProject: {
        color: theme.palette.secondary.contrastText,
        textDecoration: "none",
        '&:active, &:hover': {
            color: theme.palette.secondary.main,
        }
    },
    projectDetail: {
        backgroundColor: theme.palette.background.paper,
        '& p': {
            color: theme.palette.info.main
        }
    },
}));

export default function Experience(props) {
    const classes = useStyles();

    return (
        <div>
            {props.position === 'left' ?
                <Grid container spacing={4} className={classes.root}>
                    <Grid item lg={6} className={classes.detail1}>
                        <h3 className={classes.titleDetail}>Featured Project</h3>
                        <a className={classes.titleProject} href={props.link} target="_blank" rel="noopener noreferrer">
                            <h2>{props.title}</h2>
                        </a>
                        <Card className={classes.projectDetail}>
                            <CardContent>
                                <p>{props.detail}</p>
                            </CardContent>
                        </Card>
                        {props.tech}
                    </Grid>
                    <Grid item lg={7}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <img src={props.image} alt={props.alt} />
                        </a>
                    </Grid>
                </Grid> :
                <Grid container spacing={4} className={classes.root}>
                    <Grid item lg={7}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <img src={props.image} alt={props.alt} />
                        </a>
                    </Grid>
                    <Grid item lg={6} className={classes.detail2}>
                        <h3 className={classes.titleDetail}>Featured Project</h3>
                        <h2 className={classes.titleProject}>{props.title}</h2>
                        <Card className={classes.projectDetail}>
                            <CardContent>
                                <p>{props.detail}</p>
                            </CardContent>
                        </Card>
                        {props.tech}
                    </Grid>
                </Grid>
            }
        </div>
    );
}
