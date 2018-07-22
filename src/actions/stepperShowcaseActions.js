import * as types from '../constants/actionTypes';

export function incrementCurrentStep() {
  return function (dispatch) {
    return dispatch({
      type: types.INCREMENT_CURRENT_STEP
    });
  };
}

export function decrementCurrentStep() {
  return function (dispatch) {
    return dispatch({
      type: types.DECREMENT_CURRENT_STEP
    });
  };
}
