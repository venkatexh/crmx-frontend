import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrganizationUsers } from "../../../redux/actions/organization/fetchOrganizationUsers";
import UserCard from "./UserCard";

const UsersList = () => {
  const state = useSelector(({ loggedUser, organizationUsers }) => ({
    loggedUser,
    organizationUsers,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchOrganizationUsers(
        state.loggedUser.id,
        state.loggedUser.organization._id
      )
    );
  }, []);
  return (
    <>
      <div>
        {state.organizationUsers.currentUsers?.map((user) => {
          return (
            <UserCard
              key={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
            />
          );
        })}
      </div>
      <div>
        {state.organizationUsers.invitedUsers?.map((user) => {
          return <UserCard key={user._id} email={user.email} />;
        })}
      </div>
    </>
  );
};

export default UsersList;
