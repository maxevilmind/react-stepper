import { combineReducers } from 'redux';
import stepperShowcase from './stepperShowcaseReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  stepperShowcase,
  routing: routerReducer
});

export default rootReducer;
