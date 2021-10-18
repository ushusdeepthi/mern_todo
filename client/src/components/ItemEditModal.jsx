import React,{ useContext } from 'react'
import axios from "axios"
import { UserContext } from '../contexts/UserContext'
import {TextField, Button} from '@material-ui/core';

    
    export default function ItemEditModal() {
        const apiUrl = "http://localhost:5000/api/items";
        const {authHeader, setModal, item,setItem,todos,setTodos} = useContext(UserContext)

        const handleSubmit= async(e)=>{
            e.preventDefault()
        try{
            await axios.patch(`${apiUrl}/${item._id}`,item,{headers:authHeader()},)
            setModal(false)
            setTodos(todos.map((todo)=>(todo._id === item._id ? item : todo )))
        }catch(error){
            console.log(error.message)
        }
    }
const handleCancel= ()=>{
    console.log(item);
    setModal(false)
}

    return (
        <>
            <h1>Add a new Note</h1>
            <form autoComplete="off">
                <TextField
                    onChange = {(e)=>setItem({...item, title:e.target.value})}
                    label="Title"
                    variant="outlined"
                    color="primary"
                    value={item.title}
                    fullWidth
                    required
                />
                <TextField 
                    onChange = {(e)=>setItem({...item, body:e.target.value})}
                    label="Description"
                    variant="outlined"
                    color="primary"
                    value = {item.body}
                    multiline
                    rows={4}
                    fullWidth
                    required
                />
                <Button 
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                <Button 
                    type="submit"
                    color="primary"
                    variant="contained"
                     onClick={handleCancel}
                >
                    Cancel
                </Button>
            </form>
        </>
    )
}
