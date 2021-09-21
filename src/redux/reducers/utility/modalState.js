export const modalState = (initial = null, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return action.payload;
    default:
      return initial;
  }
};
