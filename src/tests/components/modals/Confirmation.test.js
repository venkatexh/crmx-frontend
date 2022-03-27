import { shallow } from "enzyme";
import React from "react";
import Confirmation from "../../../components/modals/Confirmation";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be confirmation modal component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Confirmation
          payload={{
            message: "sure wantto do this?",
            trueText: "yes",
            falseText: "no",
            action: () => {},
            type: "success type",
          }}
        />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
