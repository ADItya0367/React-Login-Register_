import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Register from './page/Register'
import Login from './page/Login'
import Error from './page/Error'

export default function App() {

    // states/variables


    // functions 

    // return statements 

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </Router> 
  )
}
