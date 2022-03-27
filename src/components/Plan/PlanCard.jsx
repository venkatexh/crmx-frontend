import React, { useEffect, useState } from "react";
import "../../sass/components/plan/planCard.component.scss";
import { saveSelectedPlan } from "../../redux/actions/plan/saveSelectedPlan";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchStripeSecret } from "../../redux/actions/plan/fetchStripeSecret";

const PlanCard = ({
  name,
  price,
  rate,
  description,
  features,
  handleClick,
  idx,
  selected,
  userPlan,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [actionText, setActionText] = useState("");

  useEffect(() => {
    if (userPlan === name) {
      setActionText("Current Plan");
    }
    if (userPlan === "Standard" && name === "Pro") {
      setActionText("Upgrade");
    }
    if (userPlan === "Standard" && name === "Free") {
      setActionText("Downgrade");
    }
    if (userPlan === "Free" && name !== "Free") {
      setActionText("Upgrade");
    }
    if (userPlan === "Pro" && name !== "Pro") {
      setActionText("Downgrade");
    }
  }, [userPlan, name]);

  const handleActionClick = async () => {
    await dispatch(fetchStripeSecret(price));
    dispatch(
      saveSelectedPlan({
        name,
        price,
        rate,
        description,
      })
    );
    history.push("/checkout");
  };

  return (
    <div className={`${selected === idx ? "selectedPlanCard" : ""} planCard`}>
      <div className={"planName"}>{name}</div>
      <div>
        <div className={"planPrice"}>${price}</div>
        <div className={"planRate"}>{rate}</div>
      </div>
      <div className={"planFeatures"}>{features}</div>
      <div>{description}</div>
      <div>
        <button
          className={`${userPlan !== name ? "upgradeButton" : "currentButton"}`}
          onClick={handleActionClick}
        >
          {actionText}
        </button>
      </div>
      <div className={"viewDetails"} onClick={() => handleClick(idx)}>
        View Plan Details
      </div>
    </div>
  );
};

export default React.memo(PlanCard);
