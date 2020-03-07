import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        background: theme.palette.background.paper,
        '& h3': {
            color: theme.palette.info.main
        },
        '& p': {
            color: theme.palette.secondary.main,
            fontSize: '12px'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    btn: {
        textTransform: "unset",
        fontFamily: "B612 Mono",
        margin: '0 8px',
        fontSize: '12px'
    },
}));

export default function WorkCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} data-aos="zoom-in-down" data-aos-duration="2000">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                    className={classes.media}
                    image={props.photos}
                    title="Photo"
                />
            </a>
            <CardContent>
                <h3 className={classes.title}>{props.title}</h3>
                <p className={classes.subtitle}>{props.subtitle}</p>
            </CardContent>
            <CardActions disableSpacing>
                <Button href={props.link} target="_blank" rel="noopener noreferrer" className={classes.btn} size="small" color="secondary" variant="outlined">
                    View Site
                </Button>
            </CardActions>
        </Card>
    );
}
