export const initialState = {
  foo: 'Bazinga!'
}

const myReducer = (state = initialState, action) => {
  const reduced = { ...state };
  switch (action.type) {
    case 'SET_FOO':
      return {
        ...reduced,
        foo: action.payload
      }
    default:
      return state;
  }
}

export default myReducer;