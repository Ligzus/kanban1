import React, { useState } from 'react'
import './App.css'
import { GlobalStyle } from './Global.styled.js'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import CurrentCard from './pages/CardPage/CardPage.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import ExitPage from './pages/ExitPage/ExitPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NewCard from './pages/NewCardPage/NewCard.jsx'


function App() {
  const [cards, setCards] = useState([]);
  const [token, setToken] = useState(null);

  return ( 
    <>
      <GlobalStyle />

      <Routes>
        
        <Route element={<PrivateRoute token={token} />} >
          <Route path='/' element={<HomePage token={token} cards={cards} setCards={setCards} />}>
            <Route path='/card/:id' element={<CurrentCard />} />
            <Route path='/exit' element={<ExitPage setToken={setToken} />} />
            <Route path='/newcard' element={<NewCard cards={cards} setCards={setCards} />} />
          </Route>
        </Route>

        <Route path='/login' element={<LoginPage setToken={setToken} />} />
        <Route path='/register' element={<RegisterPage setToken={setToken} />} />

        <Route path="*" element={<NotFoundPage />} />
                
      </Routes>

    </>
  )
}

export default App;