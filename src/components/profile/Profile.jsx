import { useSelector } from "react-redux";
import { useState } from "react";
import "../../sass/pages/profile.page.scss";

const EditProfile = ({
  firstName,
  lastName,
  email,
  handleFirstNameChange,
  handleLastNameChange,
  handleSave,
}) => {
  return (
    <div className={"editProfile"}>
      <div className={"editRow"}>
        <div className={"editGroup"}>
          <div className={"editLabel"}>First Name</div>
          <input
            className={"editInput"}
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className={"editGroup"}>
          <div>Last Name</div>
          <input
            className={"editInput"}
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <div className={"editRow"}>
        <div className={"editGroup"}>
          <div>Email</div>
          <input className={"editInput"} value={email} disabled={true} />
        </div>
      </div>
      <div className={"editRow"}>
        <div className={"editGroup"}>
          <div>Privilege</div>
          <input className={"editInput"} value={"Admin"} disabled={true} />
        </div>
      </div>
      <div className={"editRow"}>
        <button className={"saveButton"} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

const Profile = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const [firstName, setFirstName] = useState(state.loggedUser.firstName);
  const [lastName, setLastName] = useState(state.loggedUser.lastName);
  const [edit, setEdit] = useState(false);

  const onSave = () => {
    setEdit(false);
  };

  return (
    <div className={"profilePage"}>
      <div className={"header"}>
        <div className={"row"}>
          <div>
            <div>Your organization</div>
            <div className={"organization"}>
              {state.loggedUser.organization?.name}
            </div>
          </div>
          <div className={"verified"}>Verified User</div>
        </div>
        <div className={"row"}>
          <div className={"joinedOn"}>
            Joined {state.loggedUser.organization?.name} on{" "}
            {state.loggedUser.joinedOn}
          </div>
        </div>
      </div>
      <div className={"profileBody"}>
        {edit ? (
          <EditProfile
            firstName={firstName}
            lastName={lastName}
            email={state.loggedUser.email}
            handleFirstNameChange={(e) => setFirstName(e.target.value)}
            handleLastNameChange={(e) => setLastName(e.target.value)}
            handleSave={() => onSave()}
          />
        ) : (
          <div className={"profileDetails"}>
            <div className={"editRow"}>
              <div className={"editGroup"}>
                <div className={"editLabel"}>First Name</div>
                <input
                  className={"editInput"}
                  value={firstName}
                  disabled={true}
                />
              </div>
              <div className={"editGroup"}>
                <div>Last Name</div>
                <input
                  className={"editInput"}
                  value={lastName}
                  disabled={true}
                />
              </div>
            </div>
            <div className={"editRow"}>
              <div className={"editGroup"}>
                <div>Email</div>
                <input
                  className={"editInput"}
                  value={state.loggedUser.email}
                  disabled={true}
                />
              </div>
            </div>
            <div className={"editRow"}>
              <div className={"editGroup"}>
                <div>Privilege</div>
                <input
                  className={"editInput"}
                  value={"Admin"}
                  disabled={true}
                />
              </div>
            </div>
            <div className={"editRow"}>
              <button
                className={"saveButton"}
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit profile
              </button>
            </div>
          </div>
        )}
        <button className={"leaveOrgButton"}>Leave Organization</button>
      </div>
    </div>
  );
};

export default Profile;
