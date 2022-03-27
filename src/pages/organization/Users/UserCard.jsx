import { memo } from "react";

const UserCard = ({ firstName, lastName, email }) => {
  return (
    <div className={"userCard"}>
      <div className={"userAvatar"}>{firstName?.charAt(0).toUpperCase()}</div>
      <div className={"userName"}>
        {firstName} {lastName}
      </div>
      <div className={"userEmail"}>{email}</div>
      <div className={"userPrivilege"}>admin</div>
    </div>
  );
};

export default memo(UserCard);
