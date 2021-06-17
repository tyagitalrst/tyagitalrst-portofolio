import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
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
    textRight: {
        color: theme.palette.info.main,
        fontSize: "1rem",
        paddingRight: "26px",
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
        [
        createData('1',
            <p> Write performant and maintainable code for new features and functionality 
                using JavaScript (ES6), VueJs, HTML, and (S)CSS.
            </p>
        ),
        createData('2',
            <p> Perform debug, bug fixes and code reviews.</p>
        ),
        createData('3',
            <p>Communicate and collaborate with engineers, designers, and product managers on daily basis to identify, 
                manage risks, issues, and opportunities in features.</p>
        ),
        ],
        [
        createData('1',
            <p> Revamp
                <span>
                    <a href="https://www.urbanhire.com/" target="_blank" rel="noopener noreferrer"> web Urbanhire </a>
                </span>, developed a new Wordpress template for 
                <span>
                    <a href="https://www.urbanhire.com/blog/" target="_blank" rel="noopener noreferrer"> blog Urbanhire </a>
                </span>, and 
                <span>
                <a href="https://resources.urbanhire.com/" target="_blank" rel="noopener noreferrer"> web Urbanhire resources</a>
                </span>, implementing UI/UX design mock-up into code.  And also ensure the web is responsive that can be viewed on mobile as well as desktop.
            </p>),
        createData('2',
            <p> Work closely with designers to develop the website revamp project using HTML, SASS, LESS, Jade, JavaScript, 
                and PHP for code on the server-side of Wordpress. </p>)
        ]
    ];

    return (
        <section id="experience" className={classes.root} data-aos="zoom-in" data-aos-duration="2000">
            <Grid container
                justify="center"
                alignItems="center"
                spacing={0}>
                <Grid item lg={10} xs={12}>
                    <h2 className={classes.intro}><span className={classes.smallIntro}>02.</span> Where I've Worked</h2>
                    <Grid item lg={12}>
                        <h4 className={classes.jobTitle}>Front-end Engineer<span className={classes.workAt}> @Advotics - Supply Chain SaaS</span></h4>
                        <p className={classes.date}>August 2020 - Now</p>
                        <Grid container spacing={0}>
                            <Grid item lg={8}>
                                <Table className={classes.tables} size="small" aria-label="a dense table">
                                    <TableBody>
                                        {rows[0].map(row => (
                                            <tr key={row.id}>
                                                <th align="left" className={classes.iconPad}>{<ArrowRightIcon style={{ color: '#00735C' }} />}</th>
                                                <th align="left" className={classes.text}>{row.value}</th>
                                            </tr>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12}>
                        <h4 align="right" className={classes.jobTitle}>Front-end Engineer Intern<span className={classes.workAt}> @Urbanhire</span></h4>
                        <p align="right" className={classes.date}>June - August 2019</p>
                        <Grid container spacing={0} justify="flex-end">
                            <Grid item lg={8}>
                                <Table className={classes.tables} size="small" aria-label="a dense table">
                                    <TableBody>
                                        {rows[1].map(row => (
                                            <tr key={row.id}>
                                                <th align="right" className={classes.textRight}>{row.value}</th>
                                                <th align="right" className={classes.iconPad}>{<ArrowLeftIcon style={{ color: '#00735C' }} />}</th>
                                            </tr>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section >
    );
}
