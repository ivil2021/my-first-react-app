/*
Напишите компонент InputField, который использует useState для хранения значения текстового поля.
При каждом изменении поля отображайте текущее значение ниже текстового поля.
*/

import React, { useState } from 'react';

export function InputField() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-field">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Введите текст" 
      />
      <p>Текущее значение: {inputValue}</p>
    </div>
  );
}
