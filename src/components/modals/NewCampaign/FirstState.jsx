import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../sass/components/modals/newCampaign.scss";
import { saveTags } from "../../../redux/actions/account/saveTags";

const FirstState = ({
  name,
  tags,
  handleTagAddition,
  handleNameChange,
  handleStateChange,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const state = useSelector(({ loggedUser, campaigns, tags }) => ({
    loggedUser,
    campaigns,
    tags,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveTags(state.loggedUser.id, state.loggedUser.organization));
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (name === "" || !name.trim()) {
      setErrorMessage("Please enter campaign name.");
    } else if (tags.length === 0) {
      setErrorMessage("Please select at least one tag.");
    } else {
      handleStateChange();
    }
  };

  return (
    <div className={"newCampaign"}>
      <div className={"header"}>Create new campaign</div>
      <form className={"form"}>
        <div>
          <label>Give a unique name to your campaign</label>
          <input
            className={"modalInput inputLarge"}
            value={name}
            placeholder={"Enter campaign name"}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div className={"tagsInput"}>
          <label>Add tags to your campaign</label>
          <div className={"tagsList"}>
            <div className={"userTagsList"}>
              <div className={"listWrapper"}>
                {state.tags.map((tag) => {
                  return (
                    <div
                      className={`${
                        tags.filter((t) => t.id === tag._id).length > 0
                          ? "userTagSelected"
                          : "userTag"
                      }`}
                      key={tag._id}
                      onClick={() => handleTagAddition(tag)}
                    >
                      {tag.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={"selectedTagsList"}>
              {tags.map((tag) => {
                return (
                  <div key={tag.id} className={"selectedTag"}>
                    {tag.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={"btnContainer"}>
          <div className={"errorMessage"}>{errorMessage}</div>
          <button className={"button"} onClick={handleButtonClick}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstState;
