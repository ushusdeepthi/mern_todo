import React, {createContext} from 'react'

export const UserContext = createContext()

export function UserProvider({children}){
    const authHeader = ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return { Authorization: 'Bearer ' + user.token };
        } else {
            return {};
        }
    }
    const userContextValue={authHeader}
return (
      <UserContext.Provider value={userContextValue}>
          {children}
      </UserContext.Provider>
  )
}
