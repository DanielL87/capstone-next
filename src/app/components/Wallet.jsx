"use client";
import React, { useEffect, useState } from "react";

export default function Wallet(user) {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const fetchCoins = async () => {
      setCoins(user.coin);
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
