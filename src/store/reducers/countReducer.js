
import { ADD_COUNT, SUBSTRACT_COUNT } from '../actions/actionsCount';

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