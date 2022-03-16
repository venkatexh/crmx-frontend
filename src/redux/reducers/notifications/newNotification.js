export const newNotification = (initial = false, action) => {
  switch (action.type) {
    case "SET_NEW_NOTIFICATION":
      return action.payload;
    default:
      return initial;
  }
};
