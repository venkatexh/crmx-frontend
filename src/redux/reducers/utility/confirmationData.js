export const confirmationData = (initial = null, action) => {
  switch (action.type) {
    case "CONFIRMATION_MODAL":
      return action.payload;
    default:
      return initial;
  }
}