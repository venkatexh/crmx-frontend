import "../../../sass/components/home/tags/tag.component.scss";
import { memo } from "react";

const Tag = ({ name, length, createdAt, updatedAt }) => {
  return (
    <div className={"tag"}>
      <div className={"left"}>
        <div className={"name"}>{name}</div>
        <div className={"length"}>{length} contacts</div>
      </div>
      <div className={"middle"}>
        <div className={"crated"}>Created at {createdAt}</div>
        <div className={"updated"}>Last updated at {updatedAt}</div>
      </div>
      <div className={"right"}>
        <button className={"button"}>View Tag</button>
      </div>
    </div>
  );
};

export default memo(Tag);
