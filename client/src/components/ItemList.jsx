import React,{ useState, useEffect,useContext } from 'react'
import axios from "axios"
import { UserContext } from '../contexts/UserContext'
import ItemEditModal from './ItemEditModal';

export default function ItemList() {
    const apiUrl = "http://localhost:5000/api/items";
    const [todos, setTodos] = useState([]);
    const [user,setUser] = useState(null)
    const {authHeader,modal, setModal, item, setItem} = useContext(UserContext)

    useEffect(()=>{
        getTodoList(); 
        getUser() 
    },[])

    const getTodoList =  async()=>{
        try{
            const list = await axios.get(apiUrl,{headers:authHeader()})
            setTodos(list.data)
        }catch(err){
            console.log(err)
        }        
    }
    const getUser = async()=>{
        try{
        const user = await axios.get("http://localhost:5000/api/user",{headers:authHeader()})
        setUser(user.data)
        }catch(err){
            console.log(err)
        }        
    }
    const deleteItem = async(id)=>{
        try{
            await axios.delete(`${apiUrl}/${id}`, {headers:authHeader()})
            const newTodos = todos.filter((item) => item._id !== id)
            setTodos(newTodos);
        }catch(err){
            console.log(err)
        }
    }

        const editItem = async(id)=>{
        try{
            const todoItem = await axios.get(`${apiUrl}/${id}`, {headers:authHeader()})
            setItem(todoItem.data)
            console.log(item)
            setModal(true)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
        
        {!todos && <h1>Loading.....</h1> }
        {todos && 
            todos.map((item,index)=>{
                return(
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                        <button onClick={()=>deleteItem(item._id)}>Delete</button>
                        <button onClick={()=>editItem(item._id)}>Edit</button>
                    </div>
                )
            })
            
        }
        {modal && <ItemEditModal /> }

        {user && <h1>{user.name}</h1>}
        </>
    )
}