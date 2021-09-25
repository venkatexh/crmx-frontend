import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";
import { accountWindow } from "./account/accountWindow";
import { contacts } from "./account/contacts";
import { modalState } from "./utility/modalState";
import { campaigns } from "./account/campaigns";

const reducer = combineReducers({
  loggedUser,
  accountWindow,
  contacts,
  campaigns,
  modalState,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;
