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
        state.loggedUser.organizationId
      )
    );
  }, []);
  return (
    <div>
      {state.organizationUsers.map(({ firstName, lastName, email }) => {
        return (
          <UserCard firstName={firstName} lastName={lastName} email={email} />
        );
      })}
    </div>
  );
};

export default UsersList;
