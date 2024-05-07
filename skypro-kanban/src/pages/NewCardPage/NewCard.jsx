import PopNewCard from "../../components/PopUps/NewCard/PopNewCard";
import { cardList } from "../../data";
import { statusList } from "../../data";

function NewCard() {

    function addCard({ ccc }) {
        const newCard = {
            id: cards.length + 1,
            category: cardList[cardList.length - 1].category || "Без кактегории", 
            title: "Самая новая задача", 
            date: new Date().toLocaleDateString(), 
            status: statusList[0],
        }
    
        setCards([...cards, newCard]);
    }

    return <PopNewCard addCard={addCard} />

}



export default NewCard;