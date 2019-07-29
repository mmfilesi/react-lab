export const ADD_COUNT = 'ADD_COUNT';
export const SUBSTRACT_COUNT = 'SUBSTRACT_COUNT';

export function addCount(payload) {
  return { type: ADD_COUNT, payload }
};

export function substractCount(payload) {
  return { type: SUBSTRACT_COUNT, payload }
};