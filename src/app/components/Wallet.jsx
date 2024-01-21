"use client";
import React, { useEffect, useState } from "react";

import { fetchUser } from "../lib/fetchUser";

export default function Wallet() {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const fetchCoins = async () => {
      const user = await fetchUser();
      setCoins(user.coins || 0);
    };

    fetchCoins();
  }, []);

  return (
    <div>
      <h2>Your Wallet</h2>
      <p>Coins: {coins}</p>
    </div>
  );
}
