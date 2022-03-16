import "../../sass/pages/home.page.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../../redux/actions/auth/signin";
import Modal from "../../components/modals/Modal";

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
  }, []);

  return (
    <>
      {/*<div className={"body"}>{componentToRender()}</div>*/}
      {state.modalState ? <Modal /> : <></>}
    </>
  );
};

export default Home;
