import React,{ useState, useEffect,useContext } from 'react'
import axios from "axios"
import { UserContext } from '../contexts/UserContext'

export default function ItemList() {
    const apiUrl = "http://localhost:5000/api/items";
    const [todos, setTodos] = useState([]);
    const {authHeader}=useContext(UserContext)

    useEffect(()=>{
        getTodoList();
    },[])

    const getTodoList =  async()=>{
        try{
            const list = await axios.get(apiUrl,{headers:authHeader()})
            setTodos(list.data)
            console.log(list.data)
        }catch(err){
            console.log(err)
        }        
    }
    return (
        <div>
            <h1>The list goes here</h1>
        </div>
    )
}