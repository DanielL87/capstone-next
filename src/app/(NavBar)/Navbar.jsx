import React from "react";

import Link from "next/link";
import Logout from "../components/Logout.jsx";
import { fetchUser } from "../lib/fetchUser.js";

export default async function Navbar() {
  const user = await fetchUser();
  console.log(user);

  return (
    <div>
      <Link href={"/"}> Home</Link>
      {!user.id ? (
        <div>
          <Link className="sub" href={"/login"}>
            Login
          </Link>
          <Link href={"/register"}>Sign Up</Link>
        </div>
      ) : (
        <div>
          <div>Welcome {user.username}</div>
          <Logout />
        </div>
      )}
    </div>
  );
}
