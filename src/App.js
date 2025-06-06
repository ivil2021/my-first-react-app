import './App.css';
import { Greeting } from './components/Greeting';
import { Profile } from './components/Profile';
import { ShoppingList } from './components/ShoppingList';
import { Counter } from './components/Counter';
import { InputField } from './components/InputField';
import { Toggle } from './components/Toggle';

export function App() {
  const items = [
    { id: 1, name: 'Яблоки', price: 5 },
    { id: 2, name: 'Бананы', price: 15 },
    { id: 3, name: 'Апельсины', price: 25 },
  ];

  return (
    <div className="App">
      <Greeting name="Андрей" />
      <Greeting name="Аня" />
      <Profile name="Аня" age={23} location="Таганрог" />
      <ShoppingList items={items} />
      <Counter />
      <InputField />
      <Toggle />
    </div>
  );
}
