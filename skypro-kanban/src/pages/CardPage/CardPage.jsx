import { useParams } from 'react-router-dom';
import { cardList } from "../../data";

function CurrentCard() {
    let { id } = useParams();
    const card = cardList.find(card => card.id === parseInt(id));

    return <div>Страница пользователя с ID: {id}</div>;
}

export default CurrentCard;