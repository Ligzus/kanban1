import React, { useState } from 'react'
import './App.css'
import { GlobalStyle } from './Global.styled.js'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'


function App() {
  

  return ( 
    <>
      <GlobalStyle />

      <Routes>
        
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/card/:id' element={<CardPage />} />
        <Route path='/exit' element={<ExitPage />} /> */}

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
                
      </Routes>

    </>
  )
}

export default App