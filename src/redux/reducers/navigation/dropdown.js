export const dropdown = (initial = null, action) => {
  switch (action.type) {
    case "SET_DROPDOWN":
      return action.payload;
    default:
      return initial;
  }
};
