"use client";
import React, { useState, useEffect } from "react";

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
            id: pokemonData.id,
            name: pokemonData.name,
            types: pokemonData.types.map((type) => type.type.name),
            sprite: pokemonData.sprites.front_default,
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

  return (
    <div>
      <h1>Fetched Pokémon</h1>
      <ul>
        {pokemonArray.map((pokemon) => (
          <div>
            {" "}
            <li key={pokemon.id}>
              {pokemon.name} - ID: {pokemon.id}, Types:{" "}
              {pokemon.types.join(", ")}
              {/* Display more properties as needed */}
            </li>
            <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
          </div>
        ))}
      </ul>
      <p>{error}</p>
    </div>
  );
}
