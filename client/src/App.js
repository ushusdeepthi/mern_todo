import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

export default function App() {
  return (
    
    <Switch>
      <Route path="/">
         <Homepage />
      </Route>
    </Switch>
  )
}
