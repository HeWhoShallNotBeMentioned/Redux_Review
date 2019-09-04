import { STORE_RESULT, DELETE_RESULT } from '../actions/actions';

const initialState = { results: [] };

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
      const updatedArr = state.results.filter(item => {
        return item.id !== action.id;
      });
      return {
        ...state,
        results: updatedArr,
      };

    default:
      return state;
  }
};

export default resultReducer;
