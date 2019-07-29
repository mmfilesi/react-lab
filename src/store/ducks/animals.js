// tipo de acción
const ADD_ANIMAL = 'animals/add';

const initialStateAnimals = {
  animals: ['gatos', 'lemures', 'ranas']
};

// nuestro reducer
export default function reducerAnimal(state = initialStateAnimals, action = {}) {

  switch (action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        animals: [...state.animals, action.payload]
      };
    default:
      return state;
  }  
}

// creador de acciones
export function addAnimal(newAnimal) {
  return { type: ADD_ANIMAL, payload: newAnimal };
}