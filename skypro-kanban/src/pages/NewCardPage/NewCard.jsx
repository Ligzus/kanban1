import { useNavigate } from "react-router-dom";
import PopNewCard from "../../components/PopUps/NewCard/PopNewCard";
import { statusList } from "../../data";

function NewCard(/*{ cards, setCards }*/) {

    // let navigate = useNavigate();
    
    // function addCard() {       

    //     const newCard = {            
    //         _id: cards.length + 1,
    //         topic: "Без кактегории", 
    //         title: "Самая новая задача", 
    //         description: "Описание новой задачи",
    //         date: new Date(), 
    //         status: statusList[0],
    //     }
    
    //     setCards([...cards, newCard]);        
    //     navigate('/');
    // }

    return <PopNewCard /*addCard={addCard} cards={cards} setCards={setCards} */ />

}

export default NewCard;
