import React from "react";
import useFirestore from "../hooks/useFirestore";

const Users = () => {
  const { docs } = useFirestore("users");

  return (
    <div className="user">
      {docs && docs.map((user) => <div>{user.userName}</div>)}
    </div>
  );
};

export default Users;
