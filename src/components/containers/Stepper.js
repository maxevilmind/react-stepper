import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Stepper from '../Stepper';

export class StepperContainer extends React.Component {

  render() {
    return (
      <Stepper
        options={this.props.options}
      />
    );
  }
}

StepperContainer.propTypes = {
  options: PropTypes.array.isRequired
};

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepperContainer);
