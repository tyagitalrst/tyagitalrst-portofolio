import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

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
    },
    jobTitle: {
        color: theme.palette.secondary.contrastText,
        fontSize: "1.25rem",
        marginBottom: "0"
    },
    workAt: {
        color: theme.palette.secondary.main,
        fontSize: "1.25rem"
    },
    date: {
        color: theme.palette.info.main,
        fontSize: ".875rem",
    },
    text: {
        color: theme.palette.info.main,
        fontSize: "1rem",
        paddingLeft: "56px",
        fontWeight: "500",
        '& p': {
            margin: "0px",
        },
        '& a': {
            textDecoration: "none",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            '&:hover': {
                color: theme.palette.warning.contrastText,
            }
        }
    },
    iconPad: {
        maxHeight: "24px",
        minHeight: "24px",
        position: "absolute"
    }
}));

export default function Experience() {
    const classes = useStyles();

    function createData(id, value) {
        return { id, value };
    }

    const rows = [
        createData('1',
            <p> Revamp
                <span>
                    <a href="https://www.urbanhire.com/" target="_blank" rel="noopener noreferrer"> web Urbanhire </a>
                </span>, implementing UI/UX design mock-up into code using LESS, Jade, and JavaScript. And also ensure the web is responsive that can viewed on mobile as well as desktop.
            </p>),
        createData('2',
            <p> Revamp
            <span>
                    <a href="https://www.urbanhire.com/blog/" target="_blank" rel="noopener noreferrer"> blog Urbanhire </a>
                </span>and
            <span>
                    <a href="https://resources.urbanhire.com/" target="_blank" rel="noopener noreferrer"> web Urbanhire resources</a>
                </span>. Both of the web is a Wordpress site. Responsible for making a new Wordpress template for the blog and the Urbanhire resources web. Implementing UI / UX design mockup into code using HTML, SASS, JavaScript and PHP for code the server - side of Wordpress. And also ensure the web is responsive that can viewed on mobile as well as desktop.
            </p>)
    ];

    return (
        <section id="experience" className={classes.root} data-aos="zoom-in" data-aos-duration="2000">
            <Grid container
                justify="center"
                alignItems="center"
                spacing={0}>
                <Grid item lg={10} xs={12}>
                    <h2 className={classes.intro}><span className={classes.smallIntro}>02.</span> Where I've Worked</h2>
                    <h4 className={classes.jobTitle}>Front-end Engineer Intern<span className={classes.workAt}> @Urbanhire</span></h4>
                    <p className={classes.date}>June - August 2019</p>
                    <Grid container spacing={0}>
                        <Grid item lg={8}>
                            <Table className={classes.tables} size="small" aria-label="a dense table">
                                <TableBody>
                                    {rows.map(row => (
                                        <tr key={row.id}>
                                            <th align="left" className={classes.iconPad}>{<ArrowRightAltIcon style={{ color: '#00735C' }} />}</th>
                                            <th align="left" className={classes.text}>{row.value}</th>
                                        </tr>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section >
    );
}
