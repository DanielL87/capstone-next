import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <div className={styles.navBarContainer}>
      <Link href={"/"}> Home</Link>
      <Link className={styles.login} href={"/login"}>
        Login
      </Link>
      <Link href={"/register"}>Sign Up</Link>
    </div>
  );
}
