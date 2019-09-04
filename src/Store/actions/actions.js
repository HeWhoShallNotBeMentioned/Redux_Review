export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDFIVE = 'ADDFIVE';
export const MINUSFIVE = 'MINUSFIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

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

export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    id: id,
  };
};
