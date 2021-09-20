import LeftNav from "../../components/navigation/LeftNav";
import "../../sass/pages/account.page.scss";
import Dashboard from "../account/Dashboard";
import Contacts from "../account/Contacts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Campaigns from "../account/Campaigns";
import Tags from "../account/Tags";
import Surveys from "../account/Surveys";

const Account = () => {
  const state = useSelector(({ accountWindow }) => ({ accountWindow }));
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

  useEffect(() => {}, [state.accountWindow]);
  return (
    <div className={"mainContainer"}>
      <div className={"nav"}>
        <LeftNav />
      </div>
      <div className={"body"}>{componentToRender()}</div>
      <div className={"rightCol"}>pro</div>
    </div>
  );
};

export default Account;
