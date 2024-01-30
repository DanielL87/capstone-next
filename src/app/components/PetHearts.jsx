"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";

export default function PetHearts({ pokemon }) {
  const [hearts, setHearts] = useState(1);
  const [showRunAwayMessage, setShowRunAwayMessage] = useState(false);

  useEffect(() => {
    async function fetchHearts() {
      try {
        const response = await fetch(`/api/pets/${pokemon.id}`);
        const data = await response.json();

        const fetchedHearts = data.pet.hearts;

        setHearts(fetchedHearts);
      } catch (error) {
        console.error("Error fetching hearts:", error);
      }
    }

    fetchHearts();

    const timer = setInterval(() => {
      if (hearts === 5) {
        setShowRunAwayMessage(true);
      } else if (hearts === 0) {
        setShowRunAwayMessage(false);
      }

      setHearts((prevHearts) => (prevHearts < 5 ? prevHearts + 1 : 0));
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, [pokemon]);

  return (
    <>
      <div className={styles.petHeartContainer}>
        {showRunAwayMessage ? (
          <p>Your pet ran away!</p>
        ) : (
          <p>{"❤️ ".repeat(hearts)}</p>
        )}
      </div>
    </>
  );
}
