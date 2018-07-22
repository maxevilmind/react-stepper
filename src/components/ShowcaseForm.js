import React from 'react';
import {func} from 'prop-types';

import {fuelSavings} from '../types';
import Stepper from './containers/Stepper'

const options = [
  { id: 1, name: 'story' },
  { id: 2, name: 'to do' },
  { id: 3, name: 'build' },
  { id: 4, name: 'test' },
  { id: 5, name: 'deploy' },
];

const ShowcaseFormContainer = () => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Stepper options={options}/>
  </div>
);

ShowcaseFormContainer.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  fuelSavings: fuelSavings.isRequired
};

export default ShowcaseFormContainer;
