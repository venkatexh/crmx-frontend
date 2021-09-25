import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveCampaigns } from "../../../redux/actions/account/saveCampaigns";
import Campaign from "./Campaign";
import "../../../sass/components/account/campaigns/container.scss";

const Container = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const state = useSelector(({ campaigns, loggedUser }) => ({
    campaigns,
    loggedUser,
  }));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(saveCampaigns(state.loggedUser.id));
      setLoading(false);
    }, 500);
  }, []);

  const componentToRender = () => {
    if (loading) {
      return (
        <img
          src={"/loaders/comp_loader.gif"}
          alt={"loader"}
          className={"loader"}
        />
      );
    } else {
      return (
        <div>
          {state.campaigns.length === 0 ? (
            <div>You don't have any campaigns</div>
          ) : (
            <div>
              {state.campaigns.map(
                ({ name, status, scheduledAt, sentAt, sentTo }) => {
                  return (
                    <Campaign
                      name={name}
                      status={status}
                      scheduledAt={scheduledAt}
                      sentAt={sentAt}
                      sentTo={sentTo}
                    />
                  );
                }
              )}
            </div>
          )}
        </div>
      );
    }
  };
  return (
    <div className={"campaignsContainer"}>
      <div className={`${loading ? "campaignsLoading" : "campaignsLoaded"}`}>
        {componentToRender()}
      </div>
      <div className={"filtersList"}></div>
    </div>
  );
};

export default Container;
