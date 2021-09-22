import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { useSelector } from "react-redux";
import Account from "./index/Account";

const Main = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  console.log(state);

  const nonSessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/login"} />
        </Route>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={Signup} />
        <Redirect to={"/"} />
      </Switch>
    );
  };

  const sessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/account"} />
        </Route>
        <Route exact path={"/account"} component={Account} />
        <Redirect to={"/"} />
      </Switch>
    );
  };

  const routesToReturn = () => {
    if (sessionStorage.getItem("loggedUser")) {
      return sessionRoutes();
    } else {
      return nonSessionRoutes();
    }
  };

  return <Router>{routesToReturn()}</Router>;
};

export default Main;
