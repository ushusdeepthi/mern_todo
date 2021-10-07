import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

export default function App() {
  return (
    
    <Switch>
      <Route path="/login">
         <Login />
      </Route>
      <Route path="/">
         <Homepage />
      </Route>
    </Switch>
  )
}
