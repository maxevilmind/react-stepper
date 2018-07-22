import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import { ShowcaseFormContainer } from "./ShowcaseFormContainer";

import initialState from "../../reducers/initialState";


const actions = {
  incrementCurrentStep: jest.fn(),
  decrementCurrentStep: jest.fn()
};

describe("<FuelSavingsPage />", () => {
  it("should match snapshot", () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ShowcaseFormContainer
          actions={actions}
          currentStep={1}
        />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});