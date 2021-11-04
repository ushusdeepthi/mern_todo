import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import {AppBar,Avatar, Button, Container, CssBaseline, TextField, Toolbar, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import useStyles from '../styles/styles'
import axios from "axios"

export default function Login() {
    const classes = useStyles()
    const history = useHistory()
    const apiUrl = "http://localhost:5000/api/login";
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
             if(email && password){
                const credentials ={
                   email,
                   password
                }
                const user = await axios.post(apiUrl,credentials)
                if(user){
                    localStorage.setItem("user", JSON.stringify(user.data))
                    history.push('/todo')
                }
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
                    Sign in
                    </Typography>
                    <form  onSubmit={handleSubmit}>
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
                            variant="outlined"
                            margin="normal"
                            label="Password" 
                            type="password"
                            required
                            fullWidth
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Sign in
                            </Button>
                            <p>Do not have an account! 
                                <Link to="/register"> Sign up </Link>
                            </p>
                        </div>
                    </form>
                 </div>
            </Container>
        </>
    )
}