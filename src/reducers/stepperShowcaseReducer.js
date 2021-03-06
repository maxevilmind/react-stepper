import {INCREMENT_CURRENT_STEP, DECREMENT_CURRENT_STEP} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function stepperShowcaseReducer(state = initialState.stepperShowcase, action) {

  switch (action.type) {
    case INCREMENT_CURRENT_STEP:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call
      return objectAssign({}, state, {currentStep: state.currentStep + 1});

    case DECREMENT_CURRENT_STEP:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call
      return objectAssign({}, state, {currentStep: state.currentStep - 1});


    default:
      return state;
  }
}
