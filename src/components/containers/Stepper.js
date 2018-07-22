import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Stepper from '../Stepper';

export class StepperContainer extends React.Component {

  render() {
    return (
      <Stepper {...this.props}/>
    );
  }
}

StepperContainer.propTypes = {
  options: PropTypes.array.isRequired
};

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepperContainer);
