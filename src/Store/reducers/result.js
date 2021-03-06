import { STORE_RESULT, DELETE_RESULT } from '../actions/actionTypes';

const initialState = { results: [] };

const deleteResult = (state, action) => {
  const updatedArr = state.results.filter(item => {
    return item.id !== action.id;
  });
  return {
    ...state,
    results: updatedArr,
  };
};

const resultReducer = (state = initialState, action) => {
  console.log('state before the reducer', state.counter, state.results);
  switch (action.type) {
    case STORE_RESULT:
      // can use concat because it returns a new array. Cannot use push as
      // it will return the same array and mutate state
      // example: results: state.results.concat(state.counter);
      return {
        ...state,
        results: [...state.results, { val: action.result, id: new Date() }],
      };
    case DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultReducer;
