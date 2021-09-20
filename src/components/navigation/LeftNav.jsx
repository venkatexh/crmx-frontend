import { Link } from "react-router-dom";
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
      <>
        <Link to={`/${window}`} className={"linkTag"}>
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
        </Link>
        {/*<hr className={"line"} />*/}
      </>
    );
  };
  return (
    <div className={"navigation"}>
      <div className={"logo"}>CRMX</div>
      {windows.map((window) => {
        return <NavLink window={window} />;
      })}
    </div>
  );
};
export default LeftNav;
