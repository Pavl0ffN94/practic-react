import React, {useState} from 'react';
import {CostForm} from './CostForm';
import './NewCost.css';

export const NewCost = props => {
  const [isFormVisible, setisFormVisible] = useState(false);

  const saveCostDateHandler = inputCostDate => {
    const costData = {
      ...inputCostDate,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    saveCostDateHandler(false);
  };

  const inputCostDateHandler = () => {
    setisFormVisible(true);
  };

  const canceCostHandler = () => {
    setisFormVisible(false);
  };

  return (
    <div className="new-cost ">
      {!isFormVisible && (
        <button onClick={inputCostDateHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm onSaveCostDate={saveCostDateHandler} onCancel={canceCostHandler} />
      )}
    </div>
  );
};
