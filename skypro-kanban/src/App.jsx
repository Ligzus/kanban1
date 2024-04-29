import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import PopNewCard from './components/PopUps/NewCard/PopNewCard.jsx'
import PopBrowse from './components/PopUps/PopBrowse/PopBrowse.jsx'
import PopExit from './components/PopUps/PopExit.jsx'

function App() {

  return (  
    <div className="wrapper">
    
    {/* Компонент Логаут */}
    <PopExit />

    {/* Компонент Созданиня задачи */}
    <PopNewCard />

    {/* Компонент Просмотра деталей задачи */}
    <PopBrowse />
  
    {/* Компонент Header */}
    <Header />

    {/* Компонент Main */}
    <Main />
  
  </div>)
}

export default App