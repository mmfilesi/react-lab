import React, {createStore } from 'react';
import myReducer, { initialState } from './reducers';

const MyStore = React.createContext();
const MyProvider = ({children}) => {
  const storeData = createStore(myReducer, initialState);
  return <MyStore.Provider value={storeData}>{children}</MyStore.Provider>
}

export { MyStore, MyProvider }