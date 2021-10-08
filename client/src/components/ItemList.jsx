import React,{ useState, useEffect,useContext } from 'react'
import axios from "axios"
import { UserContext } from '../contexts/UserContext'

export default function ItemList() {
    const apiUrl = "http://localhost:5000/api/items";
    const [todos, setTodos] = useState([]); //state to store todoList
    const {authHeader}=useContext(UserContext) // Token to be send along with header for authorisation

    useEffect(()=>{
        console.log('Axios request for get todo List')
    },[])

    return (
        <div>
            <h1>The list goes here</h1>
        </div>
    )
}
