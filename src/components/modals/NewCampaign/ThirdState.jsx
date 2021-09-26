const ThirdState = () => {
  return (
    <div className={"newCampaign"}>
      <div className={"success"}>
        <img
          src={"/icons/checked.png"}
          alt={"success"}
          className={"successIcon"}
        />
        <div className={"message"}>Your campaign was created!</div>
      </div>
      <div className={"buttonsGroup"}>
        <button className={"button send"}>Send Now</button>
        <button className={"button schedule"}>Schedule</button>
      </div>
    </div>
  );
};
export default ThirdState;
