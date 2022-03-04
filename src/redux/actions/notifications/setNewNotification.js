import actionTypes from "../../actionTypes";

export const setNewNotification = (value) => {
  return { type: actionTypes.SET_NEW_NOTIFICATION, payload: value };
};
