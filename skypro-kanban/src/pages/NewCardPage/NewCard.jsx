import PopNewCard from "../../components/PopUps/NewCard/PopNewCard";
import { statusList } from "../../data";

function NewCard({ cards, setCards }) {

    function addCard() {

        console.log(cards);

        const newCard = {            
            id: cards.length + 1,
            category: cards[cards.length - 1].category || "Без кактегории", 
            title: "Самая новая задача", 
            date: new Date().toLocaleDateString(), 
            status: statusList[0],
        }
    
        setCards([...cards, newCard]);
    }

    return <PopNewCard addCard={addCard} cards={cards} setCards={setCards} />

}

export default NewCard;
