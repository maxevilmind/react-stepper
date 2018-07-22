import React from 'react';
import {number, func} from 'prop-types';

import Stepper from './containers/Stepper'

const options = [
  { id: 0, name: 'story' },
  { id: 1, name: 'to do' },
  { id: 2, name: 'build' },
  { id: 3, name: 'test' },
  { id: 4, name: 'deploy' },
];

const ShowcaseForm = ({currentStep, incrementCurrentStep, decrementCurrentStep}) => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
    <Stepper options={options} currentStep={currentStep}/>
    <button id='button-increment' onClick={incrementCurrentStep}>next step is {currentStep + 1}</button>
    <button id='button-decrement' onClick={decrementCurrentStep}>previous step is {currentStep - 1}</button>
  </div>
);

ShowcaseForm.propTypes = {
  currentStep: number.isRequired,
  incrementCurrentStep: func,
  decrementCurrentStep: func,
};

export default ShowcaseForm;
