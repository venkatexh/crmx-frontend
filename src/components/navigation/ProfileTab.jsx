import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/auth/signin";
import {useHistory} from "react-router";

const ProfileTab = () => {
  const state = useSelector(({loggedUser}) => ({loggedUser}));
  const dispatch = useDispatch();
  const history = useHistory();

  const logUserOut = () => {
    sessionStorage.clear();
    dispatch(login(null));
  };

  return (
    <div className={"profileTab"}>
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
        <div className={"menu-item"}>Profile</div>
        <div className={"menu-item"} onClick={() => history.push('/account')}>Account</div>
        <div className={"menu-item"} onClick={logUserOut}>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
