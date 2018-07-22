import * as ActionTypes from '../constants/actionTypes';
import configureStore from './configureStore';

describe('Store', () => {
  it('should increment currentStep after INCREMENT_CURRENT_STEP has been dispatched', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.INCREMENT_CURRENT_STEP },
      { type: ActionTypes.INCREMENT_CURRENT_STEP }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      currentStep: 2
    };

    expect(actual.stepperShowcase).toEqual(expected);
  });

  it('should decrement currentStep after DECREMENT_CURRENT_STEP has been dispatched', () => {
    const store = configureStore();

    const actions = [
    { type: ActionTypes.INCREMENT_CURRENT_STEP },
        { type: ActionTypes.INCREMENT_CURRENT_STEP },
        { type: ActionTypes.DECREMENT_CURRENT_STEP }
      ];
      actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
        currentStep: 1
      };

    expect(actual.stepperShowcase).toEqual(expected);
  });
});