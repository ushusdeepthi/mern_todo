import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export function UserProvider({children}){
    const [todos, setTodos] = useState([]);
    const [modal, setModal ] = useState(false)
    const [item, setItem] = useState(null)
    const authHeader = ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return { Authorization: 'Bearer ' + user.token };
        } else {
            return {};
        }
    }
    const userContextValue={authHeader, modal, setModal, item, setItem,todos,setTodos}
return (
      <UserContext.Provider value={userContextValue}>
          {children}
      </UserContext.Provider>
  )
}