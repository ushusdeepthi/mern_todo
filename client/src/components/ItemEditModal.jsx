import React,{ useContext } from 'react'
import axios from "axios"
import {Avatar, Button, Container, CssBaseline,Modal, TextField, Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import useStyles from '../styles/styles'
import { UserContext } from '../contexts/UserContext'

    
    export default function ItemEditModal() {
            const classes = useStyles()
        const apiUrl = "http://localhost:5000/api/items";
        const {authHeader, setModal, item,setItem,todos,setTodos,modal} = useContext(UserContext)

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
        <Modal open={modal}>           
            <Container className={`${classes.form} ${classes.modal}`} maxWidth ="lg" component="section">
                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <CreateIcon />
                    </Avatar>
                     <Typography component="h1" variant="h5">
                        Edit Note
                    </Typography>
                        <form autoComplete="off">
                        <TextField
                            onChange = {(e)=>setItem({...item, title:e.target.value})}
                            label="Title"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value={item.title}
                            fullWidth
                            required
                        />
                        <TextField 
                            onChange = {(e)=>setItem({...item, body:e.target.value})}
                            label="Description"
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            value = {item.body}
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        <div>
                            <Button 
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={`${classes.submit} ${classes.buttonSize}`}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                            <Button 
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={`${classes.submit} ${classes.buttonSize}`}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </Modal>
    )
}