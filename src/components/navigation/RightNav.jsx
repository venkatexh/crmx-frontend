import "../../sass/components/navigation.component.scss";
import { useDispatch, useSelector } from "react-redux";
import UserTab from "./UserTab";
import NotificationTab from "./NotificationTab";
import { setNewNotification } from "../../redux/actions/notifications/setNewNotification";
import { Link } from "react-router-dom";
import { setDropdown } from "../../redux/actions/navigation/setDropdown";

const RightNav = () => {
  const state = useSelector(({ loggedUser, newNotification, dropdown }) => ({
    loggedUser,
    newNotification,
    dropdown,
  }));
  const dispatch = useDispatch();

  const tabToRender = () => {
    if (state.dropdown === "profile") {
      return <UserTab />;
    } else if (state.dropdown === "notification") {
      return <NotificationTab />;
    }
  };

  return (
    <div className={"rightNav"}>
      {state.dropdown ? <div>{tabToRender()}</div> : <></>}
      <div
        className={"profileBtn"}
        onClick={() => {
          dispatch(
            setDropdown(state.dropdown === "profile" ? null : "profile")
          );
        }}
      >
        {state.loggedUser.firstName[0]}
      </div>
      <div
        className={"iconContainer"}
        onClick={() => {
          dispatch(
            setDropdown(
              state.dropdown === "notification" ? null : "notification"
            )
          );
          dispatch(setNewNotification(false));
        }}
      >
        <img src={"/icons/bell.png"} alt={"icon"} style={{ height: "32px" }} />
        {state.newNotification ? (
          <div className={"notificationSymbol"}>&#8226;</div>
        ) : null}
      </div>
      <Link to={"/organization-settings"} className={"iconContainer"}>
        <img
          src={"/icons/setting.png"}
          alt={"icon"}
          style={{ height: "32px" }}
        />
      </Link>
      <div className={"iconContainer"}>
        <img
          src={"/icons/magic-wand.png"}
          alt={"icon"}
          style={{ height: "32px" }}
        />
      </div>
    </div>
  );
};

export default RightNav;
