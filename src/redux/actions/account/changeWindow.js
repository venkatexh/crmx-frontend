import actionTypes from "../../actionTypes";

export const changeWindow = (window) => {
  return { type: actionTypes.CHANGE_WINDOW, payload: window };
};
