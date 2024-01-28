"use client";
import React, { useState } from "react";

import styles from "../page.module.css";
import PokemonList from "./PokemonList.jsx";

export default function Pokedex({ collection }) {
  const [startId, setStartId] = useState(1);
  const [endId, setEndId] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  async function handleShowMore() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    if (endId + 10 <= 151) {
      setEndId((prevEndId) => prevEndId + 10);
      setStartId((prevStartId) => prevStartId + 10);
    } else {
      setEndId(151);
      setStartId(141);
    }

    setIsLoading(false);
  }

  async function handleShowLess() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (startId - 10 >= 1) {
      setEndId((prevEndId) => prevEndId - 10);
      setStartId((prevStartId) => prevStartId - 10);
    } else {
      setStartId(1);
      setEndId(10);
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.pokedexCardMainContainer}>
      <PokemonList startId={startId} endId={endId} collection={collection} />
      {endId < 151 ? (
        <button
          className={styles.loginBtn}
          onClick={handleShowMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Show More"}
        </button>
      ) : null}
      {/* handle showless */}
      {endId > 10 ? (
        <button
          className={styles.loginBtn}
          onClick={handleShowLess}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Show Less"}
        </button>
      ) : null}
    </div>
  );
}
