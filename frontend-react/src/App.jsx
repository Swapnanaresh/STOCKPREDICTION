import { useState } from 'react'
import './assets/css/style.css'

import Main from './components/Main'
import Register from './components/register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header'
import Footer from './components/Footer'
import Login from './components/Login'



function App(){

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = '/' element={<Main />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>
    <Footer/> 
    
    </BrowserRouter>

    
    
    
    



    </>
  )
}

export default App
