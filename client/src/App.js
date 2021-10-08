import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Todo from './pages/Todo'
import { UserProvider } from './contexts/UserContext'

export default function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/register">
            <Register />
          </Route>  
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </UserProvider>
  )
}
