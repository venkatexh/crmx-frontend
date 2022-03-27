import { shallow } from "enzyme";
import React from "react";
import Body from "../../../components/Contact/Body";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Contact body component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Body
          contact={{
            tags: ["test tag"],
            activities: [{}, {}],
            _id: "testid123",
          }}
        />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
