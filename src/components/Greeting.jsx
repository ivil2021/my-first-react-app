/*
Создайте компонент Greeting, который принимает пропс name
и отображает приветствие в формате "Привет, [имя]!". 
Используйте этот компонент в основном приложении, передавая разные имена.
*/

export function Greeting({name}) {
  return (
    <div>
      <h1>{`Привет, ${name}`}</h1>
    </div>
  );
}
