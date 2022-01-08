import LeftNav from "../../components/navigation/LeftNav";
import "../../sass/pages/home.page.scss";
import Dashboard from "../home/Dashboard";
import Contacts from "../home/Contacts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Campaigns from "../home/Campaigns";
import Tags from "../home/Tags";
import Surveys from "../home/Surveys";
import {login} from "../../redux/actions/auth/signin";
import Modal from "../../components/modals/Modal";
import RightNav from "../../components/navigation/RightNav";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(({loggedUser, accountWindow, modalState}) => ({
    loggedUser,
    accountWindow,
    modalState,
  }));
  useEffect(() => {
    if (!state.loggedUser) {
      dispatch(login(JSON.parse(sessionStorage.getItem("loggedUser"))));
    }
  }, []);
  const componentToRender = () => {
    switch (state.accountWindow) {
      case "dashboard":
        return <Dashboard/>;
      case "contacts":
        return <Contacts/>;
      case "campaigns":
        return <Campaigns/>;
      case "tags":
        return <Tags/>;
      case "surveys":
        return <Surveys/>;
      default:
        return <Dashboard/>;
    }
  };

  useEffect(() => {
  }, [state.accountWindow]);
  return (
    <>
      <div className={"mainContainer"}>
        <div className={"nav"}>
          <LeftNav/>
        </div>
        <div className={"body"}>{componentToRender()}</div>
        <div className={"rightCol"}>
          <RightNav/>
        </div>
        {state.modalState ? <Modal/> : <></>}
      </div>
    </>
  );
};

export default Home;