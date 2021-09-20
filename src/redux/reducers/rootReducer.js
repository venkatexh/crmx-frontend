import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";
import { accountWindow } from "./account/accountWindow";

const reducer = combineReducers({
  loggedUser,
  accountWindow,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;
