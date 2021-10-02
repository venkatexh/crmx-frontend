import "../../sass/components/navigation.component.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeWindow } from "../../redux/actions/account/changeWindow";

const LeftNav = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ accountWindow }) => ({ accountWindow }));
  const handleWindowChange = (window) => {
    dispatch(changeWindow(window));
  };

  const windows = ["dashboard", "contacts", "campaigns", "tags", "surveys"];

  const NavLink = ({ window }) => {
    return (
      <div
        className={`${
          state.accountWindow === window ? "navHighlighted" : ""
        } navLink`}
        onClick={() => handleWindowChange(window)}
      >
        <span className={"text"}>
          {window.charAt(0).toUpperCase() + window.slice(1)}
        </span>
      </div>
    );
  };
  return (
    <div className={"navigation"}>
      <div className={"logo"}>CRMX</div>
      {windows.map((window, idx) => {
        return <NavLink key={idx} window={window} />;
      })}
    </div>
  );
};
export default LeftNav;
