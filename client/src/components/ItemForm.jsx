import React, { useState, useContext } from 'react'
import axios from "axios"
import {TextField, Button} from '@material-ui/core';
import { UserContext } from '../contexts/UserContext'

export default function ItemForm() {
    const apiUrl = "http://localhost:5000/api/items";
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {authHeader}=useContext(UserContext)

    const handleSubmit= async()=>{
        try{
            if(title && description){
                const newItem ={
                    "title": title,
                    "body":description
                }
            return await axios.post(apiUrl, {headers:authHeader()},newItem)
            }
            else{
                console.log('Title and description mandatory')
            }
        }catch(error){
            console.log(error.message)
        }

    }
    return (
        <>
            <h1>Add a new Note</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange = {(e)=>setTitle(e.target.value)}
                    label="Title"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                />
                <TextField 
                    onChange = {(e)=>setDescription(e.target.value)}
                    label="Description"
                    variant="outlined"
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
                >
                    Add note
                </Button>
            </form>
        </>
    )
}