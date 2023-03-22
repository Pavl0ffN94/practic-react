import {Costs} from './components/Costs/Costs';
import {NewCost} from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      date: new Date(2023, 2, 15),
      description: 'Холодильник',
      amount: 999,
    },
    {
      date: new Date(2023, 2, 15),
      description: 'MacBook',
      amount: 1250,
    },
    {
      date: new Date(2023, 11, 5),
      description: 'Джинсы',
      amount: 40,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
