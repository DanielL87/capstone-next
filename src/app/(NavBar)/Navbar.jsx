import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar.jsx';
import { fetchUser } from '../lib/fetchUser.js';
import styles from '../page.module.css';
import Logout from '../components/Logout.jsx';
import { prisma } from '../lib/prisma.js';
import { RiCoinsFill } from 'react-icons/ri';
import { MdCatchingPokemon } from 'react-icons/md';

export default async function Navbar() {
  const user = await fetchUser();
  const wallet = await prisma.wallet.findFirst({ where: { userId: user.id } });
  const petOwned = await prisma.pet.findMany({ where: { userId: user.id } });

  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.logoSidebarContainer}>
          <Link href={'/'}>
            <img className={styles.logo} src='/Logo.png' alt='Logo' />
          </Link>
          <div className={styles.siderbarContainer}>
            <Sidebar user={user} />
          </div>
        </div>

        <p className={styles.navbarSiteTitle}>Pet Taskmaster</p>

        {!user.id ? (
          <div className={styles.userSignInContainer}>
            <Link className={styles.loginBtn} href={'/login'}>
              Login
            </Link>
            <Link className={styles.registerBtn} href={'/register'}>
              Sign Up
            </Link>
          </div>
        ) : (
          <div className={styles.logoutContainer}>
            <div className={styles.username}>
              Welcome {user.username}!
              <p className={styles.userNavCoins}>
                Coins: <RiCoinsFill className={styles.navCoin} />{' '}
                <span className={styles.spanCoin}>{wallet.coin}</span>{' '}
              </p>
              <p className={styles.userNavPet}>
                Pets:
                <span className={styles.spanPet}>
                  {' '}
                  <MdCatchingPokemon className={styles.navPet} />{' '}
                  {petOwned.length}
                </span>{' '}
              </p>
            </div>
            <Logout />
          </div>
        )}
      </div>
    </>
  );
}
