import "../../../sass/components/home/campaigns/campaign.component.scss";
import { Link } from "react-router-dom";
import Axios from "axios";
import hostHeader from "../../../config/host";
import { memo, useState } from "react";

const colors = {
  draft: "#e8eded",
  paused: "#e8eded",
  Sent: "#6ef589",
  Scheduled: "#ebe660",
  failed: "#d6063a",
};

const Campaign = ({ name, status, scheduledAt, sentAt, sentTo, id }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendCampaign = async () => {
    setLoading(true);
    Axios.post(`${hostHeader.url}/api/email/send`, { id }).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    });
  };

  const buttonToRender = () => {
    switch (status) {
      case "sent":
        return (
          <Link to={`/campaign/${id}`}>
            <button className={"button"}>View Campaign</button>
          </Link>
        );
      case "draft":
        return (
          <button className={"button"} onClick={sendCampaign}>
            Send Now
          </button>
        );
    }
  };
  return (
    <div className={"campaign"}>
      <div className={"top"}>
        <div className={"name"}>{name}</div>
        <div className={"status"} style={{ background: colors[status] }}>
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
        <div className={"buttonsContainer"}>{buttonToRender()}</div>
      </div>
    </div>
  );
};

export default memo(Campaign);
