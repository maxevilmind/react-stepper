import React from 'react';
import { shallow } from 'enzyme';
import ShowcaseForm from './ShowcaseForm';

describe('<ShowcaseForm />', () => {
  it('should render', () => {
    const wrapper = shallow(<ShowcaseForm
      currentStep={1}/>
    );
    expect(wrapper).not.toBeUndefined();
  });
  it('should render 2 buttons', () => {
    const wrapper = shallow(<ShowcaseForm
      currentStep={1}/>
    );
    const buttons = wrapper.find('button');
    expect(buttons.length).toBe(2);
  });
  it('should call incrementCurrentStep on increment button click', () => {
    const mockIncrement = jest.fn()
    const wrapper = shallow(<ShowcaseForm
      incrementCurrentStep={mockIncrement}
      currentStep={1}
    />);
    const button = wrapper.find('#button-increment');
    button.simulate('click');
    expect(mockIncrement).toBeCalled();
  });
  it('should call decrementCurrentStep on decrement button click', () => {
    const mockDecrement = jest.fn()
    const wrapper = shallow(<ShowcaseForm
      decrementCurrentStep={mockDecrement}
      currentStep={1}
    />);
    const button = wrapper.find('#button-decrement');
    button.simulate('click');
    expect(mockDecrement).toBeCalled();
  });
});
