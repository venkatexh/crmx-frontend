export const accountWindow = (window = "dashboard", action) => {
  switch (action.type) {
    case "CHANGE_WINDOW":
      return action.payload;
    default:
      return window;
  }
};
