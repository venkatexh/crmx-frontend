import { useState } from "react";
import Axios from "axios";
import hostHeader from "../../config/host";
import { toggleModal } from "../../redux/actions/utility/toggleModal";
import { useDispatch, useSelector } from "react-redux";
import { updateTags } from "../../redux/actions/account/updateTags";

const NewTag = () => {
  const [tagName, setTagName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(({ loggedUser, tags }) => ({
    loggedUser,
    tags,
  }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (tagName === "" || !tagName.trim()) {
      setErrorMessage("Please enter the tag name.");
    } else {
      setLoading(true);
      const tag = {
        name: tagName,
      };
      Axios.post(
        `${hostHeader.url}/api/user/tags?org_id=${state.loggedUser.organization._id}&user_id=${state.loggedUser.id}`,
        tag
      )
        .then((res) => {
          if (res.status === 200) {
            dispatch(updateTags([...state.tags, res.data]));
            dispatch(toggleModal(null));
          }
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <div className={"newContact"}>
        <div className={"header"}>Create a new tag</div>
        <form className={"form"}>
          <input
            className={"modalInput inputLarge"}
            type={"text"}
            placeholder={"tag name"}
            onChange={(e) => {
              setErrorMessage("");
              setTagName(e.target.value);
            }}
            value={tagName}
          />
          <div className={"utility"}>
            <div className={"errorMessage"}>{errorMessage}</div>
            <button
              type={"submit"}
              className={"button"}
              onClick={handleFormSubmit}
            >
              {loading ? (
                <img
                  src={"loaders/btn_loader.gif"}
                  alt={"loader"}
                  style={{ height: "30px" }}
                />
              ) : (
                "Create"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTag;
