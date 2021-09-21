import "../../../sass/components/account/dashboard/card.component.scss";

const Card = ({ children, headerText, link1_text, link2_text }) => {
  return (
    <div className={"card"}>
      <div className={"header"}>
        <div className={"headerText"}>{headerText}</div>
        <img src={""} alt={""} />
      </div>
      <div className={"cardBody"}>{children}</div>
      <div className={"ctaContainer"}>
        <div
          className={"cta"}
          style={{
            borderRight: "2px #f2f2f2 solid",
            borderRadius: "0 0 0 6px",
          }}
        >
          {link1_text}
        </div>
        <div
          className={"cta"}
          style={{
            borderRadius: "0 0 6px 0",
          }}
        >
          {link2_text}
        </div>
      </div>
    </div>
  );
};

export default Card;
