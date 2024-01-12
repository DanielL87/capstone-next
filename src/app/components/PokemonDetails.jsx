import React from "react";
import pokeColor from "../lib/pokeColor.js";

import styles from "../page.module.css";

export default function PokemonDetails({ pokemon }) {
  const gradient = pokeColor[pokemon.type.toLowerCase()] || {
    start: "#ffffff",
    end: "#ffffff",
  };

  const gradientBackground = `linear-gradient(45deg, ${gradient.start}, ${gradient.end})`;

  return (
    <div
      className={styles.pokemonContainer}
      style={{ background: gradientBackground }}
    >
      <div key={pokemon.pokedexId}>
        <p> {pokemon.capitalizedName} </p> <p>ID:{pokemon.pokedexId}</p>{" "}
        <p>Type: {pokemon.type}</p>
        <p>Species: {pokemon.species}</p>
        <img src={pokemon.spriteUrl} alt={`${pokemon.name} sprite`} />
      </div>
    </div>
  );
}
