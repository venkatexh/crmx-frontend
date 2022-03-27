import { shallow } from "enzyme";
import React from "react";
import Header from "../../../components/Campaign/Header";

it("Campaign header component snapshot", () => {
  expect(
    shallow(
      <Header
        campaign={{ name: "Test campaign", status: "sent", from: "John Doe" }}
      />
    )
  ).toMatchSnapshot();
});
