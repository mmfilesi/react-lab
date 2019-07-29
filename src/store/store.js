/* 
El store tiene cuatro responsabilidades:
1. Almacenar el estado global de la aplicación
2. Dar acceso al estado mediante store.getState()
3. Permitir que el estado se actualice mediante store.dispatch()
4. Registrar listeners mediante store.subscribe(listener)
*/

import { createStore } from 'redux';
import { combineReducers } from 'redux';

import countReducer from './reducers/countReducer';
import reducerAnimal from './ducks/animals';
// import * as duckReducers from './ducks/index';



const reducers = combineReducers({
  countReducer,
  reducerAnimal
});

const store = createStore(reducers);

export default store;