import actionTypes from "../../actionTypes";

export const toggleModal = (value) => {
  return { type: actionTypes.TOGGLE_MODAL, payload: value };
};
