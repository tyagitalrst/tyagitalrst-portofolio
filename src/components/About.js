import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfPict from '../img/profict.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

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
    textTech: {
        color: theme.palette.info.main,
        fontSize: "1rem",
        fontWeight: "400",
        paddingLeft: "16px"
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

    function createData(id, value) {
        return { id, value };
    }
    const tech = [
        createData('1',
            <p> Languages: JavaScript (ES6), Python,  Java, Kotlin</p>
        ),
        createData('2',
            <p> Frameworks: VueJS, ReactJS, Django REST, Django Web</p>
        ),
        createData('3',
            <p>Tools: HTML, (S)CSS, Git, PostgreSQL</p>
        ),
        createData('4',
            <p>Design: Figma</p>
        )
    ]

    return (
        <section id="about"
            className={classes.root}
            data-aos="fade-up"
            data-aos-duration="1000">
            <Grid container spacing={0}>
                <Grid item lg={8} xs={12}>
                    <h2 className={classes.intro}><span className={classes.smallIntro}>01.</span> About Me</h2>
                    <p className={classes.text}>
                        Hi! I'm Tya, a passionate front-end engineer. I have high curiosity<br />
                        and willingness to learn. I'm interested in web development.<br />
                        I like to translating design into code and making sure<br />
                        the functionality works well based on the usability.<br />
                    </p>
                    <p className={classes.text}>Here are a few technologies I've been working with recently:</p>
                    <Grid container spacing={0}>
                        <Grid item>
                            <Table className={classes.tables} size="small" aria-label="a dense table">
                            <TableBody>
                                    {tech.map(row => (
                                        <tr key={row.id}>
                                            <th align="left" className={classes.iconPad}>{<ArrowForwardIcon fontSize="small" style={{ color: '#00735C' }} />}</th>
                                            <th align="left" className={classes.textTech}>{row.value}</th>
                                        </tr>
                                    ))}
                                </TableBody>
                            </Table>
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
