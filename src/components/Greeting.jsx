import React from 'react';

function Greeting({name}) {

  return (
    <div>
      <h1>{`Привет, ${name}`}</h1>
    </div>
  );
}

export default Greeting;