"use client";
import React, { useState } from "react";

import Link from "next/link";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../page.module.css";

export default function Sidebar({ user }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.sidebar}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.menuicon}
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-links"
      />

      {isSidebarOpen && (
        <div className={styles.linkContainer}>
          <Link className={styles.loginBtn} href={"/pokedex"}>
            Pokedex
          </Link>
          {user.id && (
            <Link className={styles.loginBtn} href={`/user/${user.id}`}>
              Profile
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
