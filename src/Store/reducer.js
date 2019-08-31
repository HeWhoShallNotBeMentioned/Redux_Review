const initialState = { counter: 0, results: [] };

const reducer = (state = initialState, action) => {
  console.log('state before the reducer', state.counter, state.results);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'ADDFIVE':
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case 'MINUSFIVE':
      return {
        ...state,
        counter: state.counter - action.value,
      };

    case 'STORE_RESULT':
      // can use concat because it returns a new array. Cannot use push as
      // it will return the same array and mutate state
      // example: results: state.results.concat(state.counter);
      return {
        ...state,
        results: [...state.results, { val: state.counter, id: new Date() }],
      };
    case 'DELETE_RESULT':
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

export default reducer;
