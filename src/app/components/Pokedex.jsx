"use client";
import React, { useState } from "react";
import PokemonList from "./PokemonList.jsx";
import styles from "../page.module.css";

export default function Pokedex({ collection }) {
  const [endId, setEndId] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  async function handleShowMore() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    if (endId + 10 <= 151) {
      setEndId((prevEndId) => prevEndId + 10);
    } else {
      setEndId(151);
    }

    setIsLoading(false);
  }

  return (
    <div className={styles.pokedexCardMainContainer}>
      <PokemonList startId={1} endId={endId} collection={collection} />
      {endId < 151 ? (
        <button
          className={styles.loginBtn}
          onClick={handleShowMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Show More"}
        </button>
      ) : null}
    </div>
  );
}
