import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import PopNewCard from './components/PopUps/NewCard/PopNewCard.jsx'
import PopBrowse from './components/PopUps/PopBrowse/PopBrowse.jsx'
import PopExit from './components/PopUps/PopExit.jsx'
import { useEffect, useState } from "react";
import { cardList, statusList } from "./data";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState(cardList);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      category: "Web Design", 
      title: "Самая новая задача", 
      date: new Date().toLocaleString(), 
      status: statusList[0],
    }

    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, []);

  return (  
    <div className="wrapper">
    
      {/* Компонент Логаут */}
      <PopExit />

      {/* Компонент Созданиня задачи */}
      <PopNewCard addCard={addCard} />

      {/* Компонент Просмотра деталей задачи */}
      <PopBrowse />
    
      {/* Компонент Header */}
      <Header />

      {/* Компонент Main с прелоадером */}
      {isLoading ? <p>Загружаю задачи...</p> : <Main cards={cards} />}  
  </div>)
}

export default App