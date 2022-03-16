import "../../sass/components/navigation.component.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeWindow } from "../../redux/actions/account/changeWindow";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ accountWindow }) => ({ accountWindow }));
  const handleWindowChange = (window) => {
    dispatch(changeWindow(window));
  };

  const windows = ["dashboard", "contacts", "campaigns", "tags"];

  const NavLink = ({ window }) => {
    return (
      <Link
        to={`/${window}`}
        className={`${
          state.accountWindow === window ? "navHighlighted" : ""
        } navLink`}
        onClick={() => handleWindowChange(window)}
      >
        <span className={"text"}>
          {window.charAt(0).toUpperCase() + window.slice(1)}
        </span>
      </Link>
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
