import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import {useSelector} from "react-redux";
import Account from "./account";
import Home from "./index/Home";
import Contact from "./contact";
import Campaign from "./Campaign";
import "../sass/components/home/main.component.scss";
import Confirmation from "../components/modals/Confirmation";
import Checkout from "./checkout";

const Main = () => {
  const state = useSelector(({loggedUser, confirmationData}) => ({loggedUser, confirmationData}));

  const nonSessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/login"}/>
        </Route>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/signup"} component={Signup}/>
        <Redirect to={"/"}/>
      </Switch>
    );
  };

  const sessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/home"}/>
        </Route>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={'/contact/:id'} component={Contact}/>
        <Route exact path={'/campaign/:id'} component={Campaign}/>
        <Route exact path={'/account'} component={Account}/>
        <Route exact path={'/checkout'} component={Checkout}/>
        <Redirect to={"/"}/>
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

  return (
    <div className={'main'}>
      <Router>{routesToReturn()}</Router>
      {
        state.confirmationData ?
          <Confirmation payload={state.confirmationData}/> : <></>
      }
    </div>
  );
};

export default Main;
