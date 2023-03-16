import {Costs} from './components/Costs';

function App() {
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
      <h1>Начнем изучения React</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
