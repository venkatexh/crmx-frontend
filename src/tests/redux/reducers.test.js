import { loggedUser } from "../../redux/reducers/auth/loggedUser";
import actionTypes from "../../redux/actionTypes";

describe("loggedUser", () => {
  it("should return the initial state", () => {
    expect(loggedUser(undefined, {})).toEqual(null);
  });

  const mockUser = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
  };

  it("should return the logged user", () => {
    expect(
      loggedUser(null, { type: actionTypes.LOGIN, payload: mockUser })
    ).toEqual(mockUser);
  });
});
