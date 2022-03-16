import actionTypes from "../../actionTypes";

export const updateNotifications = (notification) => {
  return { type: actionTypes.UPDATE_NOTIFICATIONS, payload: notification };
};
