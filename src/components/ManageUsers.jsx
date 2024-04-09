import React from "react";
import UserTable from "./UserTable";
const ManageUsers = () => {
  return (
    <div>
       <h1 className="text-2xl sm:text-4xl font-semibold mb-5">View user details :</h1>
      <UserTable />
    </div>
  );
};

export default ManageUsers;
