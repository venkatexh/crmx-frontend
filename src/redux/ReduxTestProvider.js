import { Provider } from "react-redux";

const ReduxTestProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default ReduxTestProvider;
