import Header from '../../components/Header/Header.jsx'
import Main from '../../components/Main/Main.jsx'
import { useEffect, useState } from "react";
import { Loader } from '../../lib/Loader.styled.js'
import { Outlet } from 'react-router-dom'

function HomePage({ cards, setCards }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500)
    }, []);

    return ( 

        <div className="wrapper">

            {/* Компонент Header */}
            <Header />

            {/* Компонент Main с прелоадером */}
            {isLoading ? <Loader>Загружаю задачи ...</Loader> : <Main cards={cards} />}  

            <Outlet cards={cards} setCards={setCards} />
            
        </div>

    )
};

export default HomePage;