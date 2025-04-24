import { Route, Routes } from 'react-router'
import './App.css'

import React from 'react'
import Home from './home'

export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
  )
}
