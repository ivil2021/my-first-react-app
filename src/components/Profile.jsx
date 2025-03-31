/*
Напишите компонент Profile, который принимает пропсы name, age и location.
Отобразите информацию о пользователе в виде карточки с заголовком "Профиль пользователя",
под которым будут перечислены имя, возраст и местоположение.
*/

export function Profile({name, age, location}) {
  return (
    <div className="profile-card">
      <div><h1>{'Профиль пользователя'}</h1></div>
      <div>{`Имя: ${name}`}</div>
      <div>{`Возраст: ${age}`}</div>
      <div>{`Локация: ${location}`}</div>
    </div>
  );
}
