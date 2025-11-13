import { useState } from 'react'
import './assets/css/style.css'

import Main from './components/Main'
import Register from './components/register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/board/Dashboard'
import PrivateRoute from './PrivateRoute'


function App(){

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = '/' element={<Main />} />
          <Route path = '/register' element = {<Register />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/dashboard' element = {<PrivateRoute><Dashboard/ ></PrivateRoute>} />
        </Routes>
      <Footer/> 
      
      </BrowserRouter>
    </AuthProvider>

    
    
    
    



    </>
  )
}

export default App
