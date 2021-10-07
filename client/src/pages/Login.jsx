import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Container,AppBar,Typography, TextField, Button} from '@material-ui/core'
import axios from "axios"

export default function Login() {
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
                else{
                    console.log('no user')
                }
            }
        }catch(err){

        }
        }
    return (
        <Container maxWidth="md">
            <AppBar position="static">
                <Typography variant="h2" align="center">TODO APP</Typography>
            </AppBar>
            <form  onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <Button type="submit" variant="contained" color="primary">
                    Log in
                    </Button>
                    <p>Do not have an coount! 
                        <Link to="/register"> Register </Link>
                    </p>
                </div>
            </form>
        </Container>
    )
}