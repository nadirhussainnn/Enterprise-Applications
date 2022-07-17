import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateProduct from './components/CreateProduct'
import Login from './components/Login'
import Register from './components/Register'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
    </>
  )
}
