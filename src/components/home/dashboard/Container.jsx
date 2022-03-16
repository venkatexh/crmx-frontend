import Growth from "./Growth";
import "../../../sass/components/home/dashboard/container.component.scss";
import Tags from "./Tags";

const Container = () => {
  return (
    <div className={"dashContainer"}>
      <div className={"headerText"}>Your business at a glance</div>
      <div className={"flexBox"}>
        <Growth/>
        <Tags/>
      </div>
    </div>
  );
};

export default Container;
