import React from 'react'
import Dashboard from './Components/Dashboard'
import Homepage from './Components/Homepage'
import Banner from './Components/banner';
import Burger from './Components/Burger';
import banner from './Components/banner';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { Route, Routes, Navigate } from "react-router-dom"
import Aboutus from './Components/Aboutus'
import Admin from './Components/Admin';
import Editor from './Components/Editor';
const App = () => {
  return (
    <div>
      <Burger />
      <Routes>
        <Route path='/' element={<Banner/>} />
        <Route path = "/Homepage" element={<Homepage />}  />
        <Route path = "/Dashboard" element={<Dashboard />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/admin" element={<Admin />} />
        <Route path = "/editor" element={<Editor />} />
        <Route path = "/signup" element={<SignUp />} />
        <Route path = "/Aboutus" element={<Aboutus />}  />
      </Routes>   
    </div>
  )
}
export default App