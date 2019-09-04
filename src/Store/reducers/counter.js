import { INCREMENT, DECREMENT, ADDFIVE, MINUSFIVE } from '../actions/actions';

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  console.log('state before the reducer', state.counter, state.results);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case ADDFIVE:
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case MINUSFIVE:
      return {
        ...state,
        counter: state.counter - action.value,
      };

    default:
      return state;
  }
};

export default counterReducer;
