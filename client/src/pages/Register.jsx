import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { TextField, Button} from '@material-ui/core'
import axios from "axios"

export default function Register() {
    const history = useHistory()
    const apiUrl = "http://localhost:5000/api/register";
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
        <form  onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="filled"
                required
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                Signup
                </Button>
                <p>Already have an account! 
                    <Link to="/login"> login </Link>
                </p>
            </div>
    </form>
    )
}