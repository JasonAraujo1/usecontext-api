import { Route, Routes } from 'react-router'
import './App.css'

import React from 'react'
import Home from './home'
import Comments from './comments'
import Todos from './todos'
import Layout from './layout'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/todos' element={<Todos />} />
      </Route>
    </Routes>

  )
}
