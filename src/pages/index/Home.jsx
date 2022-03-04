import LeftNav from "../../components/navigation/LeftNav";
import "../../sass/pages/home.page.scss";
import Dashboard from "../home/Dashboard";
import Contacts from "../home/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Campaigns from "../home/Campaigns";
import Tags from "../home/Tags";
import Surveys from "../home/Surveys";
import { login } from "../../redux/actions/auth/signin";
import Modal from "../../components/modals/Modal";
import RightNav from "../../components/navigation/RightNav";
import Pusher from "pusher-js";
import { updateNotifications } from "../../redux/actions/notifications/updateNotifications";
import { setNewNotification } from "../../redux/actions/notifications/setNewNotification";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(
    ({
      loggedUser,
      accountWindow,
      modalState,
      notifications,
      organization,
    }) => ({
      loggedUser,
      accountWindow,
      modalState,
      notifications,
      organization,
    })
  );
  useEffect(async () => {
    if (!state.loggedUser) {
      dispatch(login(JSON.parse(sessionStorage.getItem("loggedUser"))));
    }
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    console.log(state.loggedUser);
    const channel = pusher.subscribe(
      state.loggedUser.userOrganization.orgInternalId
    );
    channel.bind("notifications", (data) => {
      dispatch(updateNotifications([...state.notifications, data]));
      dispatch(setNewNotification(true));
    });
  }, []);
  const componentToRender = () => {
    switch (state.accountWindow) {
      case "dashboard":
        return <Dashboard />;
      case "contacts":
        return <Contacts />;
      case "campaigns":
        return <Campaigns />;
      case "tags":
        return <Tags />;
      case "surveys":
        return <Surveys />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <div className={"mainContainer"}>
        <div className={"nav"}>
          <LeftNav />
        </div>
        <div className={"body"}>{componentToRender()}</div>
        <div className={"rightCol"}>
          <RightNav />
        </div>
        {state.modalState ? <Modal /> : <></>}
      </div>
    </>
  );
};

export default Home;
