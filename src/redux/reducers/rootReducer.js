import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";
import { accountWindow } from "./account/accountWindow";
import { contacts } from "./account/contacts";
import { modalState } from "./utility/modalState";
import { campaigns } from "./account/campaigns";
import { tags } from "./account/tags";
import { selectedContact } from "./contact/selectedContact";
import { confirmationData } from "./utility/confirmationData";
import { selectedPlan } from "./plan/selectedPlan";
import { stripeSecret } from "./plan/stripeSecret";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { notifications } from "./notifications/notifications";
import { newNotification } from "./notifications/newNotification";
import { organizationUsers } from "./organization/organizationUsers";
import { dropdown } from "./navigation/dropdown";

const reducer = combineReducers({
  loggedUser,
  accountWindow,
  contacts,
  selectedContact,
  campaigns,
  tags,
  modalState,
  confirmationData,
  selectedPlan,
  stripeSecret,
  notifications,
  newNotification,
  organizationUsers,
  dropdown,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "selectedPlan",
    "notifications",
    "newNotification",
    "selectedContact",
  ],
};

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
