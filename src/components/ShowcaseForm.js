import React from 'react';
import {number, func} from 'prop-types';

import Stepper from './containers/Stepper'

const options = [
  { id: 1, name: 'story' },
  { id: 2, name: 'to do' },
  { id: 3, name: 'build' },
  { id: 4, name: 'test' },
  { id: 5, name: 'deploy' },
];

const ShowcaseFormContainer = ({currentStep, updateCurrentStep}) => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
    <Stepper options={options}/>
    <button onClick={() => updateCurrentStep(currentStep + 1)}>next step is {currentStep + 1}</button>
  </div>
);

ShowcaseFormContainer.propTypes = {
  currentStep: number.isRequired,
  updateCurrentStep: func.isRequired,
};

export default ShowcaseFormContainer;
