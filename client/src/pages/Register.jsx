import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { TextField, Button} from '@material-ui/core'

export default function Register() {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const handleSubmit = ()=>{
        console.log(name,email,password)
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
