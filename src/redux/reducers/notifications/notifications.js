export const notifications = (initial = [], action) => {
  switch (action.type) {
    case "FETCH_NOTIFICATIONS":
      return action.payload;
    case "UPDATE_NOTIFICATIONS":
      return action.payload;
    default:
      return initial;
  }
};
