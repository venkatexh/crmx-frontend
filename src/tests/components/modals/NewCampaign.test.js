import { shallow } from "enzyme";
import React from "react";
import NewCampaign from "../../../components/modals/NewCampaign/NewCampaign";
import FirstState from "../../../components/modals/NewCampaign/FirstState";
import SecondState from "../../../components/modals/NewCampaign/SecondState";
import ThirdState from "../../../components/modals/NewCampaign/ThirdState";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be new campaign modal component snapshot", () => {
  expect(shallow(<NewCampaign />)).toMatchSnapshot();
});

it("should be first state component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <FirstState />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be second state component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <SecondState />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be third state component snapshot", () => {
  expect(shallow(<ThirdState />)).toMatchSnapshot();
});
