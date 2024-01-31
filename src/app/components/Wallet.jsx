import React from "react";
import styles from "@/app/page.module.css";
import { fetchUser } from "../../lib/fetchUser";
import { prisma } from "../../lib/prisma";

export default async function Wallet({}) {
  const user = await fetchUser();
  const userWallet = await prisma.wallet.findFirst({
    where: { userId: user.id },
  });
  return (
    <>
      <div className={styles.userWalletMainContainer}>
        <p className={styles.userWalletTitle}>Your Wallet</p>
        <p className={styles.userCoinName}>
          Coins: <span className={styles.userCoins}>{userWallet?.coin}</span>
        </p>
      </div>
    </>
  );
}
