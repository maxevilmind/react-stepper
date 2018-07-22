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
        updateCurrentStep={this.props.actions.updateCurrentStep}
        currentStep={this.props.currentStep}
        updateStep={this.props.updateCurrentStep}
      />
    );
  }
}

ShowcaseFormContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  updateCurrentStep: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentStep: state.stepperShowcase.currentStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowcaseFormContainer);
