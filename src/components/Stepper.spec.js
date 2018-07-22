import React from 'react';
import { shallow } from 'enzyme';
import Stepper from './Stepper';

// fiveOptions should better be moved to factories
// we may create special method createOption and createOptions and
// generate fake data using faker (for example)

const fiveOptions = [
  { id: 0, name: 'story' },
  { id: 1, name: 'to do' },
  { id: 2, name: 'build' },
  { id: 3, name: 'test' },
  { id: 4, name: 'deploy' },
];

const twoOptions = [
  { id: 0, name: 'story' },
  { id: 1, name: 'to do' },
];

describe('<Stepper />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Stepper
        currentStep={1}
        options={fiveOptions}
      />
    );
    expect(wrapper).not.toBeUndefined();
  });
  it('should render 5 steps', () => {
    const wrapper = shallow(
      <Stepper
        currentStep={1}
        options={fiveOptions}
      />
    );
    const steps = wrapper.find('#segment')
    expect(steps.length).toEqual(5);
  });
  it('should render 2 steps', () => {
    const wrapper = shallow(
      <Stepper
        currentStep={1}
        options={twoOptions}
      />
    );
    const steps = wrapper.find('#segment')
    expect(steps.length).toEqual(2);
  });
});
