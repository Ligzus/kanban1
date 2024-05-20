import { useNavigate } from "react-router-dom";
import PopNewCard from "../../components/PopUps/NewCard/PopNewCard";
import { statusList } from "../../data";

function NewCard({ cards, setCards }) {

    let navigate = useNavigate();

    function closeAfterCreate() {
        navigate('/');
    }
    
    function addCard() {       

        const newCard = {            
            id: cards.length + 1,
            topic: "Без кактегории", 
            title: "Самая новая задача", 
            date: new Date().toLocaleDateString(), 
            status: statusList[0],
        }
    
        setCards([...cards, newCard]);        

        closeAfterCreate();
    }

    return <PopNewCard addCard={addCard} cards={cards} setCards={setCards} />

}

export default NewCard;
