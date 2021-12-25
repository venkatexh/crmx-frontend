import actionTypes from "../../actionTypes";

export const updateContact = (contact) => {
  console.log(contact)
  return {type: actionTypes.UPDATE_CONTACT, payload: contact}
}