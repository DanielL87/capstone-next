"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import Link from "next/link";
import styles from "../page.module.css";

export default function Sidebar({ user }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    toggleSidebar();
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isSidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className={styles.sidebarMainContainer} ref={sidebarRef}>
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebar}>
            <MdCatchingPokemon
              className={styles.menuIcon}
              onClick={toggleSidebar}
            />
          </div>
          <div>
            {!isSidebarOpen && <span className={styles.menuText}>Menu</span>}
          </div>
        </div>

        {isSidebarOpen && (
          <div className={styles.sidebarLinkContainer}>
            <Link
              className={styles.loginBtn}
              href={"/pokedex"}
              onClick={handleLinkClick}
            >
              Pokedex
            </Link>
            <Link
              className={styles.loginBtn}
              href={"/store"}
              onClick={handleLinkClick}
            >
              Store
            </Link>

            {user.id && (
              <Link
                className={styles.loginBtn}
                href={`/user/${user.id}`}
                onClick={handleLinkClick}
              >
                Profile
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
