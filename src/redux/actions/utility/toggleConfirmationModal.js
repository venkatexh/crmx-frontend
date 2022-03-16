import actionTypes from "../../actionTypes";

export const toggleConfirmationModal = (data) => {
  return {type: actionTypes.CONFIRMATION_MODAL, payload: data}
}