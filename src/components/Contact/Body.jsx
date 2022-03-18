import "../../sass/components/contact/contact.component.scss";
import hostHeader from "../../config/host";
import Axios from "axios";
import { updateContact } from "../../redux/actions/contact/updateContact";
import { useDispatch } from "react-redux";
import Activity from "./Activity";

const Body = ({ contact }) => {
  const { tags, activities } = contact;
  const dispatch = useDispatch();

  const handleTagRemoval = (tagId) => {
    Axios.delete(`${hostHeader.url}/api/contact`, {
      data: {
        contactId: contact._id,
        tagId,
      },
    })
      .then((r) => {
        if (r.status === 200) {
          dispatch(updateContact(r.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={"contactBody"}>
      <div className={"left"}>
        <div className={"heading"}>Activity</div>
        <div className={"activityContainer"}>
          {activities?.map((activity) => (
            <Activity activity={activity} key={activity.id} />
          ))}
        </div>
      </div>
      <div className={"right"}>
        <div className={"heading"}>Tags</div>
        <div className={"tagsList"}>
          {tags?.map((tag, idx) => {
            return (
              <div className={"contactTag"} key={idx}>
                <div className={"tagName"}>{tag.name}</div>
                <div
                  className={"cross"}
                  onClick={() => handleTagRemoval(tag._id)}
                >
                  &#10005;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
