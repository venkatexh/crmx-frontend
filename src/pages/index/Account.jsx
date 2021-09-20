import LeftNav from "../../components/navigation/LeftNav";
import "../../sass/pages/account.page.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../account/Dashboard";
import Contacts from "../account/Contacts";

const Account = () => {
  return (
    <div className={"mainContainer"}>
      <div className={"nav"}>
        <LeftNav />
      </div>
      <div className={"body"}>
        <Router>
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/contacts"} component={Contacts} />
        </Router>
      </div>
    </div>
  );
};

export default Account;
