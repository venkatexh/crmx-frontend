import actionTypes from "../../actionTypes";

export const updateContact = (contact) => {
  return {type: actionTypes.UPDATE_CONTACT, payload: contact}
}