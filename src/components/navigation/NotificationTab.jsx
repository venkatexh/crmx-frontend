import { useEffect } from "react";
import { fetchNotifications } from "../../redux/actions/notifications/fetchNotifications";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TypeMap = new Map();

TypeMap.set("campaign_created", "was created");
TypeMap.set("campaign_updated", "was updated");
TypeMap.set("campaign_sent", "was sent");
TypeMap.set("campaign_scheduled", "was scheduled");

const NotificationTile = ({ type, name, date }) => {
  return (
    <div className={"notificationTile"}>
      <div className={"text"}>
        Campaign {name} {TypeMap.get(type)}.
      </div>
      <div className={"date"}>{date}</div>
    </div>
  );
};

const NotificationTab = () => {
  const state = useSelector(({ notifications }) => ({ notifications }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotifications("6220e6b097cbfbcb14e14d44"));
    console.log("notif");
  }, []);
  return (
    <div className={"notificationsTab"}>
      <div>
        {state.notifications.map((notification) => {
          return (
            <NotificationTile
              name={notification.name}
              type={notification.type}
              date={notification.createdAt}
              key={notification._id}
            />
          );
        })}
      </div>
      <Link to={"/notifications"}>
        <div className={"viewAll"}>View All</div>
      </Link>
    </div>
  );
};

export default NotificationTab;
