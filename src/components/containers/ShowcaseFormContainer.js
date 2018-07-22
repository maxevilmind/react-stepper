import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/stepperShowcaseActions';
import ShowcaseForm from '../ShowcaseForm';

export class ShowcaseFormContainer extends React.Component {
  render() {
    return (
      <ShowcaseForm
        incrementCurrentStep={this.props.actions.incrementCurrentStep}
        decrementCurrentStep={this.props.actions.decrementCurrentStep}
        currentStep={this.props.currentStep}
      />
    );
  }
}

ShowcaseFormContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  incrementCurrentStep: PropTypes.func,
  decrementCurrentStep: PropTypes.func,
  
};

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepperShowcase.currentStep
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowcaseFormContainer);
