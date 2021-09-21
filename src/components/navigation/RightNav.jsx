import "../../sass/components/navigation.component.scss";
import { useSelector } from "react-redux";
import ProfileTab from "./ProfileTab";
import { useState } from "react";
import NotificationTab from "./NotificationTab";

const RightNav = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const [tabOpen, setTabOpen] = useState(false);
  const [tab, setTab] = useState("");

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
        }}
      >
        <img src={"/icons/bell.png"} alt={"icon"} style={{ height: "32px" }} />
      </div>
      <div className={"iconContainer"}>
        <img
          src={"/icons/setting.png"}
          alt={"icon"}
          style={{ height: "32px" }}
        />
      </div>
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
