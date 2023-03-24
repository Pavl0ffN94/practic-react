import {Costs} from './components/Costs/Costs';
import {NewCost} from './components/NewCost/NewCost';

const App = () => {
  const costs = [
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

  const addCostHandler = cost => {
    console.log(cost);
    console.log('App component');
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
