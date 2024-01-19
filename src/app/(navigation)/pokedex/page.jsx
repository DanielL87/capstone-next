'use client';
import React, { useState } from 'react';
import PokemonList from '../../components/PokemonList.jsx';
import styles from '../../page.module.css';

export default function Pokedex() {
  const [endId, setEndId] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  async function handleShowMore() {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    setEndId(prevEndId => prevEndId + 10);
    setIsLoading(false);
  }

  return (
    <div className={styles.pokedexCardMainContainer}>
      <PokemonList startId={1} endId={endId} />
      <button className={styles.loginBtn} onClick={handleShowMore} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Show More'}
      </button>
    </div>
  );
}