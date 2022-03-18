import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { useDispatch, useSelector } from "react-redux";
import Plan from "./account/Plan";
import Home from "./index/Home";
import Contact from "./contact";
import Campaign from "./Campaign";
import "../sass/components/home/main.component.scss";
import Confirmation from "../components/modals/Confirmation";
import Checkout from "./checkout";
import PaymentSuccess from "./checkout/PaymentSuccess";
import LeftNav from "../components/navigation/LeftNav";
import RightNav from "../components/navigation/RightNav";
import Dashboard from "./home/Dashboard";
import Contacts from "./home/Contacts";
import Campaigns from "./home/Campaigns";
import Tags from "./home/Tags";
import OrganizationSettings from "./organization/OrganizationSettings";
import OrganizationInvitation from "./organization/OrganizationInvitation";
import Modal from "../components/modals/Modal";
import Profile from "../components/profile/Profile";
import { useEffect } from "react";
import Pusher from "pusher-js";
import { setNewNotification } from "../redux/actions/notifications/setNewNotification";
import { setDropdown } from "../redux/actions/navigation/setDropdown";

const Main = () => {
  const state = useSelector(({ loggedUser, confirmationData, modalState }) => ({
    loggedUser,
    confirmationData,
    modalState,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.loggedUser) {
      const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
        cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      });
      const channel = pusher.subscribe(
        state.loggedUser.organization.orgInternalId
      );
      channel.bind("notifications", (data) => {
        dispatch(setNewNotification(true));
      });
    }
  });

  const nonSessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/login"} />
        </Route>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={Signup} />
        <Route
          exact
          path={"/user/invite/:id"}
          component={OrganizationInvitation}
        />
        <Redirect to={"/"} />
      </Switch>
    );
  };

  const sessionRoutes = () => {
    return (
      <div className={"mainContainer"}>
        <div className={"nav"}>{<LeftNav />}</div>
        <div className={"body"} onClick={() => dispatch(setDropdown(null))}>
          <Switch>
            <Route exact path={"/"}>
              <Redirect to={"/dashboard"} />
            </Route>
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/contacts"} component={Contacts} />
            <Route exact path={"/campaigns"} component={Campaigns} />
            <Route exact path={"/tags"} component={Tags} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/contact/:id"} component={Contact} />
            <Route exact path={"/campaign/:id"} component={Campaign} />
            <Route
              exact
              path={"/organization-settings"}
              component={OrganizationSettings}
            />
            <Route exact path={"/plans"} component={Plan} />
            <Route exact path={"/profile"} component={Profile} />
            <Route exact path={"/checkout"} component={Checkout} />
            <Route
              exact
              path={"/payment-success-redirect"}
              component={PaymentSuccess}
            />
            <Redirect to={"/"} />
          </Switch>
        </div>
        <div className={"rightCol"}>{<RightNav />}</div>
        {state.modalState ? <Modal /> : <></>}
      </div>
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
    <div className={"main"}>
      <Router>{routesToReturn()}</Router>
      {state.confirmationData ? (
        <Confirmation payload={state.confirmationData} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
