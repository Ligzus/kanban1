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
import { cardList } from './data.js'


function App() {
  
  const [isAuth, setIsAuth] = useState(false);
  const [cards, setCards] = useState([]);

  return ( 
    <>
      <GlobalStyle />

      <Routes>
        
        <Route element={<PrivateRoute isAuth={isAuth} />} >
          <Route path='/' element={<HomePage isAuth={isAuth} setIsAuth={setIsAuth} cards={cards} setCards={setCards} />}>
            <Route path='/card/:id' element={<CurrentCard />} />
            <Route path='/exit' element={<ExitPage setIsAuth={setIsAuth} />} />
            <Route path='/newcard' element={<NewCard cards={cards} setCards={setCards} />} />
          </Route>
        </Route>

        <Route path='/login' element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path='/register' element={<RegisterPage setIsAuth={setIsAuth} />} />

        <Route path="*" element={<NotFoundPage />} />
                
      </Routes>

    </>
  )
}

export default App;