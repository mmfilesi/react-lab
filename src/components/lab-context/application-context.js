import React from 'react';

// Estado inicial
export const initialState = {
  fruits: ['albaricoques', 'manzanas', 'peras'],
  anotherFruits: ['kiwis', 'aguacates', 'sandías']
};

// Creamos el contexto con el valor por defecto
export const AplicationContext = React.createContext(initialState.fruits);