import actionTypes from "../../actionTypes";

export const setDropdown = (tab) => {
  return { type: actionTypes.SET_DROPDOWN, payload: tab };
};
