import Header from '../../components/Header/Header.jsx'
import Main from '../../components/Main/Main.jsx'
import { useEffect, useState } from "react";
import { Loader } from '../../lib/Loader.styled.js'
import { Outlet } from 'react-router-dom'
import { getTodos } from '../../api.js';

function HomePage({ token, cards, setCards }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await getTodos({ token });
                setCards(response.tasks);
            } catch (error) {
                alert('Что-то пошло не так. Попробуйте снова.')
            } finally {
                setIsLoading(false);
            }
        };

        fetchTasks(); 
    }, [token, setCards]); 


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