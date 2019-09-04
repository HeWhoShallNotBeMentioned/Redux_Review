import { STORE_RESULT, DELETE_RESULT } from './actionTypes';

export const saveResult = result => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      // example to show we can access the state in action creator thunks
      console.log('oldCounter result.js action creator', oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const removeResult = id => {
  return {
    type: DELETE_RESULT,
    id: id,
  };
};

export const deleteResult = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch(removeResult(id));
    }, 2000);
  };
};
