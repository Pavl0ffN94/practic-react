import React, {useState} from 'react';
import './CostForm.css';

export const CostForm = props => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputData, setInputData] = useState('');

  const nameChangeHandler = e => {
    setInputName(e.target.value);
  };

  const amountChangeHandler = e => {
    setInputAmount(e.target.value);
  };

  const dataChangeHandler = e => {
    setInputData(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      data: new Date(inputData),
    };

    props.onSaveCostData(costData);

    setInputName('');
    setInputAmount('');
    setInputData('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            onChange={dataChangeHandler}
            value={inputData}
            type="date"
            min="2019-01-01"
            step="2023-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};
