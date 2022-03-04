import "../../sass/components/navigation.component.scss";
import { useDispatch, useSelector } from "react-redux";
import ProfileTab from "./ProfileTab";
import { useState } from "react";
import NotificationTab from "./NotificationTab";
import { setNewNotification } from "../../redux/actions/notifications/setNewNotification";
import { Link } from "react-router-dom";

const RightNav = () => {
  const state = useSelector(({ loggedUser, newNotification }) => ({
    loggedUser,
    newNotification,
  }));
  const [tabOpen, setTabOpen] = useState(false);
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();

  const tabToRender = () => {
    if (tab === "profile") {
      return <ProfileTab />;
    } else if (tab === "notification") {
      return <NotificationTab />;
    }
  };

  return (
    <div className={"rightNav"}>
      {tabOpen ? <div>{tabToRender()}</div> : <></>}
      <div
        className={"profileBtn"}
        onClick={() => {
          setTab("profile");
          setTabOpen(!tabOpen);
        }}
      >
        {state.loggedUser.firstName[0]}
      </div>
      <div
        className={"iconContainer"}
        onClick={() => {
          setTab("notification");
          setTabOpen(!tabOpen);
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
