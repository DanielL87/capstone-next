'use client';
import React, { useState } from 'react';
import { MdCatchingPokemon } from 'react-icons/md';

import Link from 'next/link';

import styles from '../page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ user }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <div className={styles.sidebar}>
      <MdCatchingPokemon className={styles.menuicon} onClick={toggleSidebar} />
      </div>
      {isSidebarOpen && (
        <div className={styles.sidebarLinkContainer}>
          <Link className={styles.loginBtn} href={'/pokedex'}>
            Pokedex
          </Link>
          {user.id && (
            <Link className={styles.loginBtn} href={`/user/${user.id}`}>
              Profile
            </Link>
          )}
        </div>
      )}
    
    </>
  );
}
