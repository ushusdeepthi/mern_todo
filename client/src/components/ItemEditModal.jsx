import React,{ useState, useContext } from 'react'
import axios from "axios"
import {Avatar, Button,Card, CardContent,CardActions, Container, Modal, TextField, Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import useStyles from '../styles/styles'
import { UserContext } from '../contexts/UserContext'
    
export default function ItemEditModal() {
    const classes = useStyles()
    const [edit, setEdit] = useState(false)        
    const apiUrl = "http://localhost:5000/api/items";
    const {authHeader, setModal, item,setItem,todos,setTodos,modal} = useContext(UserContext)

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            item.updatedAt = Date.now()
            await axios.patch(`${apiUrl}/${item._id}`,item,{headers:authHeader()},)
            setModal(false)
            setTodos(todos.map((todo)=>(todo._id === item._id ? item : todo )))
        }catch(error){
        }
    }
    const handleCancel= ()=>{
        setModal(false)
    }
    return (
        <Modal open={modal}>
            {edit ?          
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
                :
                <Container className={`${classes.form} ${classes.modal}`} maxWidth ="lg" component="section">
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <CreateIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        {item.title}
                        </Typography>
                        <Card className={classes.card} >
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom >
                                {item.body}
                                </Typography>                        
                                <Typography gutterBottom  className={classes.date}>
                                    Last Modified: {(item.updatedAt).toString().split('T')[0]}                                       
                                </Typography>     
                            </CardContent>
                            <CardActions>
                                <Button 
                                    onClick={()=>setEdit(true)}
                                    size="small" 
                                    color="primary"
                                >
                                    edit
                                </Button> 
                                <Button 
                                    onClick={()=>setModal(false)}
                                    size="small" 
                                    color="primary"
                                >
                                    Close
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Container>
            }
        </Modal>
    )
}