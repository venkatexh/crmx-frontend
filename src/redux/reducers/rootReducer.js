import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";
import { accountWindow } from "./account/accountWindow";
import { contacts } from "./account/contacts";

const reducer = combineReducers({
  loggedUser,
  accountWindow,
  contacts,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;
