import DisplayTasks from "@/app/components/DisplayTasks.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import React from "react";

export default async function UserTasks() {
  const user = await fetchUser();

  return (
    <>
      <div>User Tasks</div>
    </>
  );
}
