import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {AppBar,Avatar, Button, Container, CssBaseline, TextField, Toolbar, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import useStyles from '../styles/styles'

import axios from "axios"

export default function Register() {
    const classes = useStyles()
    const history = useHistory()
    const apiUrl = "https://todo-app-mern-server.herokuapp.com/api/register";
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

   const handleSubmit = async(e)=>{
       e.preventDefault()
        try{
             if(name && email && password){
                const credentials ={
                    name,
                    email,
                    password
                }
                await axios.post(apiUrl,credentials)
                history.push('/login')
            }
        }catch(err){

        }
    }
    return (
             <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EventNoteIcon className= {classes.icon} fontSize="large"/>
                    <Typography variant="h6">Plan IT</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.form} maxWidth ="md" component="main">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                     </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign up
                    </Typography>
                    <form  onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            type="email"
                            required
                            fullWidth
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            required
                            fullWidth
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Sign up
                            </Button>
                            <p>Already have an account! 
                                <Link to="/login"> Sign in </Link>
                            </p>
                        </div>
                    </form>
                 </div>
            </Container>
        </>
    )
}