import { shallow } from "enzyme";
import React from "react";
import ContactsContainer from "../../../components/home/contacts/ContactsContainer";
import ContactsHeader from "../../../components/home/contacts/ContactsHeader";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be contacts container component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <ContactsContainer />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be contacts header component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <ContactsHeader />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
