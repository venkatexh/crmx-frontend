import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";
import { accountWindow } from "./account/accountWindow";
import { contacts } from "./account/contacts";
import { modalState } from "./utility/modalState";

const reducer = combineReducers({
  loggedUser,
  accountWindow,
  contacts,
  modalState,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;
