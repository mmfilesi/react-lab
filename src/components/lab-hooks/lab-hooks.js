import React, { useState, useEffect } from 'react';

function useMiPropioHooks(value) {
  return value + ' propio hooks';
}

function LabHooks(props) {
  /* useState solo acepta un argumento, el valor default */
  let [foo, setFoo] = useState('bazinga');
  /* De efecto */
  let bar = 'Dubidú';
  /* propios */
  let tal = useMiPropioHooks(foo);

  useEffect(() => {
    document.title = bar;

    return () => {
      console.log('equivale al desmontar');
    };
  });

  return (
    <div>
      <section>
        <h5>
          Hooks de estado
        </h5>
        <p>
          Foo: { foo }
        </p>
        <p>
          TAL: {tal}
        </p>
        <button onClick={() => setFoo('Uka lele')}>Cambiar</button>
      </section>
      <section>
        <h5>
          Hooks de efecto
        </h5>
        <p>
          Bar: { bar }
        </p>        
      </section>
    </div>
  );
}

export default LabHooks;