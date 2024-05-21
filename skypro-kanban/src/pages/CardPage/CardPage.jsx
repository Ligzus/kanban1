import { useParams } from 'react-router-dom';
import PopBrowse from '../../components/PopUps/PopBrowse/PopBrowse';


function CurrentCard() {
    let {_id} = useParams();

    return <PopBrowse id={_id} />;
}

export default CurrentCard;