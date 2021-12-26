import "../../../sass/components/account/campaigns/campaign.component.scss";
import {Link} from "react-router-dom";

const colors = {
  draft: "#e8eded",
  paused: "#e8eded",
  Sent: "#6ef589",
  Scheduled: "#ebe660",
  failed: "#d6063a",
};

const Campaign = ({name, status, scheduledAt, sentAt, sentTo, id}) => {
  return (
    <div className={"campaign"}>
      <div className={"top"}>
        <div className={"name"}>{name}</div>
        <div className={"status"} style={{background: colors[status]}}>
          {status}
        </div>
      </div>
      <div className={"bottom"}>
        <div>
          <div>
            {status === "sent"
              ? `Sent ${sentAt}`
              : status === "scheduled"
                ? `Scheduled at ${scheduledAt}`
                : ""}
          </div>
          <div>{sentTo.length} recipients</div>
        </div>
        <div className={'buttonsContainer'}>
          {
            status === 'draft' ? <button className={"button"}>Send Now</button> : <></>
          }
          {
            status === 'Sent' ?
              <Link to={`/campaign/${id}`}>
                <button className={"button"}>View Campaign</button>
              </Link>
              :
              <button className={"button"}>Schedule</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Campaign;
