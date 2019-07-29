import React from 'react';

function ChildComponent(props) {
  return (
    <div style={{border: '1px solid red'}}>
     <p>Valor de foo recibido desde el padre</p>
     <p>{props.foo}</p>
     <button onClick={props.onSetFooInChild}>Cambiar el valor desde el hijo</button>
    </div>
  );
}

export default ChildComponent;