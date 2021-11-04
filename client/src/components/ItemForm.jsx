import React, { useState, useContext } from 'react'
import axios from "axios"
import {Avatar, Button, Container, CssBaseline, TextField, Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import useStyles from '../styles/styles'
import { UserContext } from '../contexts/UserContext'

export default function ItemForm() {
    const classes = useStyles()
    const apiUrl = "http://localhost:5000/api/items";
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {authHeader,todos,setTodos}=useContext(UserContext)

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            if(title && description){
                const newItem ={
                    "title": title,
                    "body":description
                }
            const new_Note = await axios.post(apiUrl,newItem,{headers:authHeader()})
            await setTodos([...todos,new_Note.data])
            e.target.heading.value= ''
            e.target.text.value= ''
            }
        }catch(error){
        }

    }
    return (
        <>
            <CssBaseline />
            <Container className={classes.form} maxWidth ="lg" component="section">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <CreateIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Add a new Note
                    </Typography>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            onChange = {(e)=>setTitle(e.target.value)}
                            label="Title"
                            name="heading"
                            margin="normal"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                        />
                        <TextField 
                            onChange = {(e)=>setDescription(e.target.value)}
                            label="Description"
                            variant="outlined"
                            name="text"
                            margin="normal"
                            color="primary"
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        <Button 
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth
                            className={classes.submit}
                        >
                            Add note
                        </Button>
                    </form>           
                </div>
            </Container>
        </>
    )
}