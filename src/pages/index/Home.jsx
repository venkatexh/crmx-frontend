import "../../sass/pages/home.page.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../../redux/actions/auth/signin";
import Modal from "../../components/modals/Modal";
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

  return (
    <>
      {/*<div className={"body"}>{componentToRender()}</div>*/}
      {state.modalState ? <Modal /> : <></>}
    </>
  );
};

export default Home;
