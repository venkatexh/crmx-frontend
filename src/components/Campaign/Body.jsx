import React from "react";
import "../../sass/components/contact/contact.component.scss";

const Body = ({ campaign }) => {
  const { subject, text, tags } = campaign;
  
  return (
    <div className={"contactBody"}>
      <div className={"left"}>
        <div className={"heading"}>Email Content</div>
        <div>Subject</div>
        <div>{subject}</div>
        <div>Email Text</div>
        <div>{text}</div>
      </div>
      <div className={"right"}>
        <div className={"heading"}>Tags</div>
        <div className={"tagsList"}>
          {tags?.map((tag, idx) => {
            return (
              <div className={"contactTag"} key={idx}>
                {tag.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Body);
