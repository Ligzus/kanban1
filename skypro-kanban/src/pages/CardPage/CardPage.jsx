import React from 'react';
import { useParams } from 'react-router-dom';
import PopBrowse from '../../components/PopUps/PopBrowse/PopBrowse';

const CurrentCard = () => {
  let { id } = useParams();

  return <PopBrowse id={id} />;
};

export default CurrentCard;