"use client";
import React, { useEffect, useState } from "react";

import styles from "../page.module.css";
import PokemonDetails from "./PokemonDetails";

export default function PokemonList({ startId, endId }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemonRange = async () => {
      const newArray = [];

      for (let id = startId; id <= endId; id++) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );

          const pokemonData = await response.json();

          // Extract relevant information from the API response
          const pokemonObject = {
            pokedexId: pokemonData.id,
            name: pokemonData.name,
            capitalizedName:
              pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1),
            type: pokemonData.types[0].type.name,
            spriteUrl: pokemonData.sprites.front_default,
          };

          newArray.push(pokemonObject);
        } catch (error) {
          setError(`Error fetching Pokémon with ID ${id}:`, error.message);
        }
      }

      setPokemonArray(newArray);
    };

    fetchPokemonRange();
  }, [startId, endId]);
  console.log(pokemonArray);

  return (
    <>
      <h1 className={styles.pokedexTitle}>Explore Our Pet Selection</h1>
      <div className={styles.pokedexContainer}>
        {pokemonArray.map((pokemon) => (
          <PokemonDetails pokemon={pokemon} />
        ))}
      </div>
      <p>{error}</p>
    </>
  );
}
