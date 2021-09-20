export const loggedUser = (user = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return JSON.parse(sessionStorage.getItem("loggedUser"));
  }
};
