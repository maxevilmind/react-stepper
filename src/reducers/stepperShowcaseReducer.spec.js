import * as ActionTypes from '../constants/actionTypes';
import reducer from './stepperShowcaseReducer';

describe('Reducers::StepperShowcase', () => {
  const getInitialState = () => {
    return {
        currentStep: 0
    };
  };

  const getAppState = () => {
    return {
      currentStep: 3
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle INCREMENT_CURRENT_STEP', () => {
    const action = { type: ActionTypes.INCREMENT_CURRENT_STEP };
    const expected = Object.assign(getAppState(), { currentStep: 4 });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle DECREMENT_CURRENT_STEP', () => {
    const action = { type: ActionTypes.DECREMENT_CURRENT_STEP };
    const expected = Object.assign(getAppState(), { currentStep: 2 });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });
});