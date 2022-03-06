import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth/signin";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const UserTab = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const dispatch = useDispatch();
  const history = useHistory();

  const logUserOut = () => {
    sessionStorage.clear();
    dispatch(login(null));
  };

  return (
    <div className={"userTab"}>
      <div className={"topDiv"}>
        <div className={"profileBtn btnInternal"}>
          {state.loggedUser.firstName[0]}
        </div>
        <div className={"profileInfo"}>
          <div className={"name"}>
            {state.loggedUser.firstName} {state.loggedUser.lastName}
          </div>
          <div>{state.loggedUser.email}</div>
        </div>
      </div>
      <div className={"menu"}>
        <Link to={"/profile"} className={"menu-item"}>
          Profile
        </Link>
        <Link to={"/plans"} className={"menu-item"}>
          Plans
        </Link>
        <div className={"menu-item"} onClick={logUserOut}>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default UserTab;
