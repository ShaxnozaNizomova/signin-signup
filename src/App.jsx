import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import User from './pages/user/User'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
