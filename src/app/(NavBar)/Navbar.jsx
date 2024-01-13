import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import Logout from "../components/Logout.jsx";
import { fetchUser } from "../lib/fetchUser.js";

export default async function Navbar() {
  const user = await fetchUser();

  return (
    <>
    
      <div className={styles.navBarContainer}>
      <Link href={"/"}>
          <img
            className={styles.logo}
            src="/Logo.png"
            alt="Logo"
          />
        </Link>
        
        <div className={styles.navBarTitle}>
          <p>Pet Taskmaster</p>
        </div>

        {!user.id ? (
          <div className={styles.userSignInContainer}>
            <Link className={styles.loginBtn} href={"/login"}>
              Login
            </Link>
            <Link className={styles.registerBtn} href={"/register"}>
              Sign Up
            </Link>
          </div>
        ) : (
          <div>
            <div>Welcome {user.username}</div>
            <Logout />
          </div>
        )}
      </div>
    </>
  );
}
