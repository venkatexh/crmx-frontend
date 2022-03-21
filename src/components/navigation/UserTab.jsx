import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth/signin";
import { Link } from "react-router-dom";
import { setDropdown } from "../../redux/actions/navigation/setDropdown";

const UserTab = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const dispatch = useDispatch();

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
        <Link
          to={"/profile"}
          className={"menu-item"}
          onClick={() => dispatch(setDropdown(null))}
        >
          Profile
        </Link>
        <Link
          to={"/plans"}
          className={"menu-item"}
          onClick={() => dispatch(setDropdown(null))}
        >
          Plans
        </Link>
        <Link
          to={"/bills"}
          className={"menu-item"}
          onClick={() => dispatch(setDropdown(null))}
        >
          Bills
        </Link>
        <div className={"menu-item"} onClick={logUserOut}>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default UserTab;
