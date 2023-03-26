import React, {useState} from 'react';
import {Costs} from './components/Costs/Costs';
import {NewCost} from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 2, 15),
    description: 'Холодильник',
    amount: 999,
  },
  {
    id: 'c2',
    date: new Date(2023, 2, 15),
    description: 'MacBook',
    amount: 1250,
  },
  {
    id: 'c3',
    date: new Date(2023, 11, 5),
    description: 'Джинсы',
    amount: 40,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = cost => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
