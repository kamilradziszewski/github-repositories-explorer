import React from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "./searchSlice";

import UserBlock from "./UserBlock.component";

const UserList = () => {
  const users = useSelector(selectUsers);

  let userList = null;
  if (users && users.length) {
    userList = users.map((user) => (
      <UserBlock key={user.id} user={user} />
    ));
  }

  return userList;
};

export default UserList;
