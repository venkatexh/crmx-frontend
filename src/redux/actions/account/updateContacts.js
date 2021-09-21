import actionTypes from "../../actionTypes";

export const updateContacts = (contacts) => {
  return { type: actionTypes.SAVE_CONTACTS, payload: contacts };
};
