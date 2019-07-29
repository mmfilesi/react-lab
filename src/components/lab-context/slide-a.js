import React from 'react';

import { AplicationContext } from './application-context';

function SlideA(props) {
  let myContext = React.useContext(AplicationContext);

  return (
    <div>
      <h5>Contexto con hooks</h5>
      <ul>
        {myContext.map((fruit, index) => {
          return <li key={index}>{fruit}</li>
        })}
      </ul>
    </div>
  )
}

export default SlideA;
