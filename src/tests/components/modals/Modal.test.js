import { shallow } from "enzyme";
import React from "react";
import Modal from "../../../components/modals/Modal";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be modal component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Modal />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
