1. Instalación

```
npx create-react-app my-app
```

2. En el formato clásico, dos tipos de componentes

2.1. Funcionales. Representación sin lógica

```
import React from 'react';

class LabHome extends React.Component {
  
  render() {
    return (
      <div>
        LabHome works!
      </div>
    );
  }
}

export default LabHome;
```

2.2. Clases. Con lógica

```
import React from 'react';

class MiComponente extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'Uka Lele',
    }
    this.setFoo = this.setFoo.bind(this);
  }

  setFoo() {
    this.setState({foo: 'trololo'});
  }
  
  render() {
    return (
      <div>
        <section>
          <p>
            <button onClick={this.setFoo}>
              Cambiar el valor de foo
            </button>
          </p>
        </section>
      </div>
    );
  }
}

export default MiComponente;
```

3. JSX

a. HTML + js (expresiones) + atributos especiales (classname)

b. Condicionales

```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;
  }
```

c. Listas
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

4. Ciclo de vida

```
  componentDidMount() {
    console.log('componentDidMount, insertado en el DOM');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('cuando se actualiza', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount, desmontao!!');
  }
```

5. State

a. Se declara en el constructor

```
  constructor(props) {
    super(props);
    this.state = {
      foo: 'Uka Lele',
    }
  }
```

b. Se cambia siempre con setState o perderíamos el binding

```
this.setState({parentFoo: 'Cambiao!!!'});
```

6. Acciones

Dos maneras de no perder el this

a. bindeando en el constructor

```
this.setFoo = this.setFoo.bind(this);
```

b. Usando una arrow

```
setFoo = () => {

}
```

7. Propiedades

Nunca se cambian en los hijos

```
<ChildComponent foo={this.state.parentFoo} onSetFooInChild={this.setFooInChild}/>

function ChildComponent(props) {
  return (
    <div style={{border: '1px solid red'}}>
     <p>Valor de foo recibido desde el padre</p>
     <p>{props.foo}</p>
     <button onClick={props.onSetFooInChild}>Cambiar el valor desde el hijo</button>
    </div>
  );
}
```

8. Redux

Actores:

1. Tipos de acciones

```
export const ADD_COUNT = 'ADD_COUNT';
export const SUBSTRACT_COUNT = 'SUBSTRACT_COUNT';
```

2. Acciones

```
export function addCount(payload) {
  return { type: ADD_COUNT, payload }
};

export function substractCount(payload) {
  return { type: SUBSTRACT_COUNT, payload }
};
```

3. Reducers inmutables

```
const initialStateCount = {
  total: 0
};

function countReducer(state = initialStateCount, action = {}) {
  console.log(action)
  switch (action.type) {    
    case ADD_COUNT:
      return Object.assign({}, state, {
        total: state.total + action.payload
      });
    case SUBSTRACT_COUNT:
      return Object.assign({}, state, {
        total: state.total - action.payload
      });
    default:
      return state;
  }
} 


export default countReducer;
```

4. El store, el almacén donde juntamos todo

```
import { createStore, combineReducers } from 'redux';

import countReducer from './reducers/countReducer';
import reducerAnimal from './ducks/animals';
// import * as duckReducers from './ducks/index';

const reducers = combineReducers({
  countReducer,
  reducerAnimal
});

const store = createStore(reducers);

export default store;
```

Escenario:

Creamos un "provider". Todo lo que esté por debajo, tiene acceso al store

```
<Provider store={store}>
  <Route path="/" exact component={LabHome} />          
  <Route path="/hierarchy" component={LabHierarchy} />
  <Route path="/counter" component={LabCounter} />
  <Route path="/ducks" component={LabDucks} />
  <Route path="/hooks" component={LabHooks} />
  <Route path="/context" component={LabContext}></Route>
  <Route path="/redux-hooks" component={LabReduxHooks}></Route>                       
</Provider>
```

Ahora los componentes pueden suscribirse a los datos y modificarlos

```
const mapDispatchToProps = {
  addCount,
  substractCount
};

function mapStateToProps(state) {
  return {
    total: state.countReducer.total
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabCounter);
```

9. El patrón duck, todo junto

10. Contexto

11. Hooks

12. TypeScript
// https://fettblog.eu/typescript-react/hooks/

