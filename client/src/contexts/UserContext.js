import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export function UserProvider({children}){
    const [todos, setTodos] = useState([]);
    const [modal, setModal ] = useState(false)
    const [user,setUser]= useState(null)
    const [item, setItem] = useState(null)
    const authHeader = ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return { Authorization: 'Bearer ' + user.token };
        } else {
            return {};
        }
    }
    const userContextValue={authHeader, modal, setModal, item, setItem,todos,setTodos,user,setUser}
return (
      <UserContext.Provider value={userContextValue}>
          {children}
      </UserContext.Provider>
  )
}