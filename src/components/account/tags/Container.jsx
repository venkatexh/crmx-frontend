import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Tag from "./Tag";
import "../../../sass/components/account/campaigns/container.scss";
import { saveTags } from "../../../redux/actions/account/saveTags";

const Container = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const state = useSelector(({ tags, loggedUser }) => ({
    tags,
    loggedUser,
  }));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(saveTags(state.loggedUser.id));
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
          {state.tags.length === 0 ? (
            <div>You don't have any campaigns</div>
          ) : (
            <div>
              {state.tags.map(
                ({ id, name, contacts, createdAt, updatedAt }) => {
                  return (
                    <Tag
                      key={id}
                      name={name}
                      length={contacts.length}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
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
