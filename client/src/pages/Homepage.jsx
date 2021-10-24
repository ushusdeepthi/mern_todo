import React from 'react'
import {AppBar,Button, Container, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../styles/styles'
import EventNoteIcon from '@material-ui/icons/EventNote';

export default function Homepage() {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EventNoteIcon className= {classes.icon} fontSize="large"/>
                    <Typography variant="h6">Plan IT</Typography>
                    <div className={classes.button}>
                        <Button variant ="contained" color="primary" size="large" href="/login">
                            Sign in
                        </Button>
                        <Button variant ="outlined" size="large" href="/Register" className={classes.buttonSignup}>
                            Sign up
                        </Button>
                    </div>
                </Toolbar>
                </AppBar>
            <Container className={classes.container}>           
                <Typography className={classes.heroText} variant="h3">
                    Plan IT, Makes life easier!!
                </Typography>
            </Container>
        </>
    )
}
