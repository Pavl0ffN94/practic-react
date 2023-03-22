import './CostItem.css';
import {CostDate} from './CostDate';
import {Card} from '../UI/Card';
import React, {useState} from 'react';

export const CostItem = props => {
  const [description, setDescrition] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescrition('New Text');
    console.log(description);
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2> {description} </h2>
        <div className="cost-item__price">${props.amount} </div>
      </div>
      <button onClick={changeDescriptionHandler}> Изменить Описание</button>
    </Card>
  );
};
