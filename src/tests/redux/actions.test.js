import { login } from "../../redux/actions/auth/signin";
import actionTypes from "../../redux/actionTypes";

describe("login", () => {
  it("should login user", () => {
    const credentials = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
    };
    const expectedAction = {
      type: actionTypes.LOGIN,
      payload: credentials,
    };
    expect(login(credentials)).toEqual(expectedAction);
  });
});
