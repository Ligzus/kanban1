import Header from '../../components/Header/Header.jsx'
import Main from '../../components/Main/Main.jsx'
import { useEffect, useState } from "react";
import { cardList, statusList } from "../../data.js";
import { Loader } from '../../lib/Loader.styled.js'
import { Outlet } from 'react-router-dom'

function HomePage() {

    const [isLoading, setIsLoading] = useState(true)
    const [cards, setCards] = useState(cardList);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500)
    }, []);

    return ( 

        <div className="wrapper">

            {/* Компонент Header */}
            <Header />

            {/* Компонент Main с прелоадером */}
            {isLoading ? <Loader>Загружаю задачи ...</Loader> : <Main cards={cards} />}  

            <Outlet setCards={setCards} cards={cards} />
            
        </div>

    )
};

export default HomePage;