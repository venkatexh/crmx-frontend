import { shallow } from "enzyme";
import React from "react";
import Header from "../../../components/Contact/Header";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Campaign header component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Header
          contact={{
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@gmail.com",
            status: "subscribed",
          }}
        />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
