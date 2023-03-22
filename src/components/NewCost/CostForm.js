import React, {useState} from 'react';
import './CostForm.css';

export const CostForm = () => {
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');

    const [userInput, setUserInput] =  useState({
        name: '',
        amount: '',
        date:''
    })

  const nameChangeHandler = e => {
    // setName(e.target.value);
    setUserInput({
        ...userInput,
        name: e.target.value
    })
  };
  const amountChangeHandler = e => {
    // setAmount(e.target.value);
    setUserInput({
        ...userInput,
        amount: e.target.value
  });
  const dateChangeHandler = e => {
    // setDate(e.target.value);
    setUserInput({
        ...userInput,
        date: e.target.value
    })
  };
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min="2019-01-01" step="2023-12-31" />
        </div>
        <div onChange={dateChangeHandler} className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};
