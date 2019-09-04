import {
  INCREMENT,
  DECREMENT,
  ADDFIVE,
  MINUSFIVE,
} from '../actions/actionTypes';

import { updateObject } from '../utilities/utility';

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
      //can use utility function to update state including for result reducer.
      return updateObject(state, { counter: state.counter - action.value });
    // return {
    //   ...state,
    //   counter: state.counter - action.value,
    // };
    default:
      return state;
  }
};

export default counterReducer;
