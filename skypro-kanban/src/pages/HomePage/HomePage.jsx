import Header from '../../components/Header/Header.jsx'
import Main from '../../components/Main/Main.jsx'
import { useEffect, useState } from "react";
import { cardList, statusList } from "../../data.js";
import { Loader } from '../../lib/Loader.styled.js'
import { Outlet } from 'react-router-dom'

function Home() {

    const [isLoading, setIsLoading] = useState(true)
    const [cards, setCards] = useState(cardList);

    // const addCard = () => {
    //     const newCard = {
    //         id: cards.length + 1,
    //         category: cardList[cardList.length - 1].category || "Без кактегории", 
    //         title: "Самая новая задача", 
    //         date: new Date().toLocaleDateString(), 
    //         status: statusList[0],
    //     }

    //     setCards([...cards, newCard]);
    // }

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500)
    }, []);

    return ( 

        <div className="wrapper">

            {/* Компонент Header */}
            <Header />

            {/* Компонент Main с прелоадером */}
            {isLoading ? <Loader>Загружаю задачи ...</Loader> : <Main cards={cards} />}  

            <Outlet cards={cards} />
            
        </div>

    )
};

export default Home;