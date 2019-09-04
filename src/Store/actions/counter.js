import { INCREMENT, DECREMENT, ADDFIVE, MINUSFIVE } from './actionTypes';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const addFive = value => {
  return {
    type: ADDFIVE,
    value: value,
  };
};

export const minusFive = value => {
  return {
    type: MINUSFIVE,
    value: value,
  };
};
