import React from "react";
import Link from "next/link";
import { userService } from "@/services/api.services";
import UserComponent from "@/components/User/UserComponent";

const UsersPage = async () => {
  let users = await userService.getAll();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {users.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
