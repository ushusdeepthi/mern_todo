import React,{ useEffect,useContext } from 'react'
import axios from "axios"
import { UserContext } from '../contexts/UserContext'
import {Avatar,Button, Card, CardContent,CardActions,Container, Grid, Typography} from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import useStyles from '../styles/styles'
import ItemEditModal from './ItemEditModal';

export default function ItemList() {
    const classes = useStyles()
    const apiUrl = "https://todo-app-mern-server.herokuapp.com/api/items";  
    const {authHeader,modal, setModal, item, setItem,todos,setTodos,user,setUser} = useContext(UserContext)

    useEffect(()=>{
        getTodoList(); 
        getUser() 
    },[])

    const getTodoList =  async()=>{
        try{
            const list = await axios.get(apiUrl,{headers:authHeader()})
            setTodos(list.data)
        }catch(err){
        }        
    }
    const getUser = async()=>{
        try{
        const user = await axios.get("https://todo-app-mern-server.herokuapp.com/api/user",{headers:authHeader()})
        setUser(user.data)
        }catch(err){
        }        
    }
    const deleteItem = async(id)=>{
        try{
            await axios.delete(`${apiUrl}/${id}`, {headers:authHeader()})
            const newTodos = todos.filter((item) => item._id !== id)
            setTodos(newTodos);
        }catch(err){
        }
    }
            const showList = async(id)=>{
        try{
            const todoItem = await axios.get(`${apiUrl}/${id}`, {headers:authHeader()})
            setItem(todoItem.data)
            setModal(true)
        }catch(err){
        }
    }

    return (
            <>
            
            {!todos && <h1>Loading.....</h1> }
            <Container className={classes.form} maxWidth ="md" component="main">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <ListAltIcon />
                        </Avatar>
                    <Typography component="h1" variant="h5">
                        Notes
                    </Typography>
                    <Grid container spacing={2} >
                        {todos && 
                            todos.map((item,index)=>{
                                return(
                                    <Grid item key={index} sm={6} xs={12}>
                                        <Card className={classes.card} >
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5">
                                                {item.title}
                                                </Typography>
                                                <Typography gutterBottom >
                                                {(item.body).slice(0,50)}
                                                </Typography>                        
                                                
                                            </CardContent>
                                            <CardActions>
                                                <Button 
                                                    onClick={()=>showList(item._id)}
                                                    size="small" 
                                                    color="primary"
                                                >
                                                    Show
                                                </Button> 
                                                <Button 
                                                    onClick={()=>deleteItem(item._id)}
                                                    size="small" 
                                                    color="secondary"
                                                >
                                                    Delete
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </Container>

            {modal && <ItemEditModal /> }
        </>
    )
}
