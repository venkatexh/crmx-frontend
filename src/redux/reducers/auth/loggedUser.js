export const loggedUser = (user = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return sessionStorage.getItem("loggedUser");
  }
};
